import { Button } from './ui/button';
import { Play, ArrowLeft } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import Editor from '@monaco-editor/react';

interface ConsoleMessage {
  type: 'log' | 'warn' | 'error';
  message: string;
  timestamp: number;
}

export function CodeCompilerPage() {
  const [selectedLanguage, setSelectedLanguage] = useState<'html' | 'css' | 'js'>('html');
  const [consoleMessages, setConsoleMessages] = useState<ConsoleMessage[]>([]);
  const [executionError, setExecutionError] = useState<string>('');
  const [iframeContent, setIframeContent] = useState<string>('');
  const [editorCode, setEditorCode] = useState({
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Dev</title>
</head>
<body>
    <h1 id="name">Lyna</h1>
</body>
</html>`,
    css: `#name {
  color: blue;
  font-size: 2em;
  cursor: pointer;
  transition: all 0.3s ease;
}`,
    js: `const name = document.querySelector("#name");

name.addEventListener("click", (e) => {
  name.style.color = "red";
  name.style.fontWeight = "bold";
});`
  });
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeWindowRef = useRef<Window | null>(null);
  const navigate = useNavigate();

  // Helper function to inject loop protection into loops
  const injectLoopProtection = (code: string): string => {
    const maxExecutionTime = 5000; // 5 seconds
    const timeCheckCode = `if (Date.now() - __loopStartTime__ > ${maxExecutionTime}) throw new Error('Infinite loop detected: execution timeout');`;
    
    // Inject protection into while loops
    code = code.replace(/while\s*\([^)]*\)\s*\{/g, (match) => {
      return match + `\nconst __loopStartTime__ = Date.now();\n`;
    });
    
    // Inject time check inside while loop bodies (basic approach)
    code = code.replace(/while\s*\([^)]*\)\s*\{\s*const __loopStartTime__[^}]*\);\n/g, (match) => {
      return match + timeCheckCode + '\n';
    });
    
    // Inject protection into for loops
    code = code.replace(/for\s*\([^)]*\)\s*\{/g, (match) => {
      return match + `\nconst __loopStartTime__ = Date.now();\n`;
    });
    
    // Inject protection into do...while loops
    code = code.replace(/do\s*\{/g, (match) => {
      return match + `\nconst __loopStartTime__ = Date.now();\n`;
    });
    
    return code;
  };

  // Setup postMessage listener for console hijacking
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.source === iframeWindowRef.current) {
        if (event.data.type === 'console') {
          setConsoleMessages((prev) => [...prev, event.data.message]);
        } else if (event.data.type === 'error') {
          setExecutionError(event.data.error);
        } else if (event.data.type === 'ready') {
          // iframe is ready
        }
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Helper to map language to Monaco Editor language
  const getMonacoLanguage = (lang: 'html' | 'css' | 'js'): string => {
    switch (lang) {
      case 'js':
        return 'javascript';
      case 'html':
        return 'html';
      case 'css':
        return 'css';
      default:
        return 'javascript';
    }
  };

  const handleRun = () => {
    console.log('Run clicked');
    // Clear previous errors and console
    setConsoleMessages([]);
    setExecutionError('');

    try {
      // Parse HTML to inject CSS and JS
      const htmlCode = editorCode.html;
      const cssCode = editorCode.css;
      let jsCode = editorCode.js;

      // Inject loop protection into the JavaScript code
      jsCode = injectLoopProtection(jsCode);

      // Create console hijacking script
      const consoleHijackCode = `
        (function() {
          const parent = window.parent;
          const originalLog = console.log;
          const originalWarn = console.warn;
          const originalError = console.error;

          console.log = function(...args) {
            const message = args.map(arg => {
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); }
                catch(e) { return String(arg); }
              }
              return String(arg);
            }).join(' ');
            parent.postMessage({
              type: 'console',
              message: { type: 'log', message: message, timestamp: Date.now() }
            }, '*');
            originalLog.apply(console, args);
          };

          console.warn = function(...args) {
            const message = args.map(arg => {
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); }
                catch(e) { return String(arg); }
              }
              return String(arg);
            }).join(' ');
            parent.postMessage({
              type: 'console',
              message: { type: 'warn', message: message, timestamp: Date.now() }
            }, '*');
            originalWarn.apply(console, args);
          };

          console.error = function(...args) {
            const message = args.map(arg => {
              if (typeof arg === 'object') {
                try { return JSON.stringify(arg, null, 2); }
                catch(e) { return String(arg); }
              }
              return String(arg);
            }).join(' ');
            parent.postMessage({
              type: 'console',
              message: { type: 'error', message: message, timestamp: Date.now() }
            }, '*');
            originalError.apply(console, args);
          };

          window.parent.postMessage({ type: 'ready' }, '*');
        })();
      `;

      // Create execution wrapper without blunt timeout
      const executionCode = `
        <script>
          ${consoleHijackCode}
          
          (function() {
            try {
              ${jsCode}
            } catch (error) {
              const errorMessage = (error instanceof Error)
                ? error.name + ': ' + error.message
                : String(error);
              window.parent.postMessage({
                type: 'error',
                error: errorMessage
              }, '*');
              console.error(errorMessage);
            }
          })();
        </script>
      `;

      // Append execution code before closing body
      const bodyClosingTag = '</body>';
      const bodyIndex = htmlCode.toLowerCase().lastIndexOf(bodyClosingTag);
      
      let finalHtml: string;
      if (bodyIndex !== -1) {
        finalHtml = htmlCode.substring(0, bodyIndex) + executionCode + htmlCode.substring(bodyIndex);
      } else {
        finalHtml = htmlCode + executionCode + '</body></html>';
      }

      console.log('Bundled code:', finalHtml);
      setIframeContent(finalHtml);

      // Load the combined HTML into iframe - no blunt timeout
      if (iframeRef.current) {
        iframeWindowRef.current = iframeRef.current.contentWindow;
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      setExecutionError(errorMessage);
    }
  };

  return (
    <div className="h-screen bg-slate-950 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <Button
          variant="outline"
          size="sm"
          className="border-slate-700 text-black hover:bg-slate-700 hover:text-white"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Go back
        </Button>
        <div className="flex items-center gap-2">
          <Button
            variant={selectedLanguage === 'html' ? 'default' : 'outline'}
            size="sm"
            className={`text-xs ${
              selectedLanguage === 'html'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
            onClick={() => setSelectedLanguage('html')}
          >
            HTML
          </Button>
          <Button
            variant={selectedLanguage === 'css' ? 'default' : 'outline'}
            size="sm"
            className={`text-xs ${
              selectedLanguage === 'css'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
            onClick={() => setSelectedLanguage('css')}
          >
            CSS
          </Button>
          <Button
            variant={selectedLanguage === 'js' ? 'default' : 'outline'}
            size="sm"
            className={`text-xs ${
              selectedLanguage === 'js'
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'border-slate-700 text-slate-300 hover:bg-slate-700'
            }`}
            onClick={() => setSelectedLanguage('js')}
          >
            JS
          </Button>
          <Button
            className="bg-green-600 hover:bg-green-700 text-white text-sm"
            onClick={handleRun}
          >
            <Play className="w-4 h-4 mr-2" />
            Run
          </Button>
        </div>
      </div>

      {/* Main content */}
      <div className="flex flex-1">
        {/* Code Editor Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center px-4 py-2 border-b border-slate-800">
            <span className="text-sm font-medium text-slate-300">
              {selectedLanguage === 'html' ? 'index.html' : selectedLanguage === 'css' ? 'style.css' : 'script.js'}
            </span>
          </div>
          <div className="flex-1 overflow-hidden">
            <Editor
              language={getMonacoLanguage(selectedLanguage)}
              value={editorCode[selectedLanguage]}
              onChange={(value) => {
                if (value !== undefined) {
                  setEditorCode((prev) => ({ ...prev, [selectedLanguage]: value }));
                }
              }}
              theme="vs-dark"
              options={{
                minimap: { enabled: false },
                fontSize: 14,
                fontFamily: 'Fira Code, Menlo, Monaco, monospace',
                tabSize: 2,
                wordWrap: 'on',
                lineNumbers: 'on',
                scrollBeyondLastLine: false,
                automaticLayout: true
              }}
            />
          </div>
        </div>

        {/* Divider */}
        <div className="w-px bg-slate-700"></div>

        {/* Output Panel */}
        <div className="w-1/2 flex flex-col">
          <div className="flex items-center px-4 py-2 border-b border-slate-800">
            <span className="text-sm font-medium text-slate-300">Output</span>
          </div>
          <div className="flex-1 overflow-hidden flex flex-col bg-slate-950">
            {/* Execution errors */}
            {executionError && (
              <div className="border-b border-slate-800 p-4 bg-red-950/30">
                <div className="font-mono text-sm text-red-400">
                  <div className="font-semibold mb-2">Error:</div>
                  <div className="whitespace-pre-wrap break-words">{executionError}</div>
                </div>
              </div>
            )}

            {/* Console and output area */}
            <div className="flex-1 overflow-auto flex flex-col">
              {/* Iframe output */}
              <iframe
                ref={iframeRef}
                srcDoc={iframeContent}
                className="flex-1 border-0 bg-white"
                title="Code Output"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />

              {/* Console output */}
              {consoleMessages.length > 0 && (
                <div className="border-t border-slate-800 bg-slate-900/50 p-4 max-h-48 overflow-y-auto">
                  <div className="font-mono text-xs">
                    <div className="text-slate-400 mb-2">Console Output:</div>
                    {consoleMessages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`${
                          msg.type === 'error'
                            ? 'text-red-400'
                            : msg.type === 'warn'
                            ? 'text-yellow-400'
                            : 'text-green-400'
                        } mb-1`}
                      >
                        <span className="text-slate-500">[{msg.type}]</span> {msg.message}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Empty state */}
            {!executionError && consoleMessages.length === 0 && (
              <div className="flex items-center justify-center h-full text-slate-500">
                <div className="text-center">
                  <div className="font-mono text-sm text-slate-400">// Click "Run" to see your program...</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}