import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { useState, useRef, type ReactNode } from 'react';
import { useNavigate } from 'react-router';

export function CodeCompiler() {
  const [selectedLanguage, setSelectedLanguage] = useState<'html' | 'css' | 'js'>('html');
  const [output, setOutput] = useState('');
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const navigate = useNavigate();

  const codeExamples = {
    html: {
      fileName: 'index.html',
      code: [
        '<!DOCTYPE html>',
        '<html lang="en">',
        '<head>',
        '    <meta charset="UTF-8">',
        '    <meta name="viewport" content="width=device-width, initial-scale=1.0">',
        '    <title>bar chart</title>',
        '    <script src = "https://d3js.org/d3.v5.min.js"></script>',
        '    <link rel="stylesheet" href="./style.css">',
        '</head>',
        '<body>',
        '    <h1 id="name">Lyna</h1>',
        '</body>',
        '<script def src ="./script.js">',
        '',
        '</script>',
        '<script src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>',
        '</html>'
      ]
    },
    css: {
      fileName: 'config.txt',
      code: [
        'font-size: 16px',
        'background: #ffffff',
        'foreground: oklch(0.145 0 0)',
        'card: #ffffff',
        'card-foreground: oklch(0.145 0 0)',
        'popover: oklch(1 0 0)',
        'popover-foreground: oklch(0.145 0 0)',
        'primary: #030213',
        'primary-foreground: oklch(1 0 0)',
        'secondary: oklch(0.95 0.0058 264.53)',
        'secondary-foreground: #030213'
      ]
    },
    js: {
      fileName: 'script.js',
      code: [
        'const name = document.querySelector("#name");',
        '',
        '',
        'name.addEventListener("click", (e) => {',
        '',
        '  name.style.color = "red";',
        '  ',
        '  name.style.fontWeight = "bold";',
        '  name.style.transition = "all 0.3s ease";',
        '});'
      ]
    }
  };

  const currentExample = codeExamples[selectedLanguage];

  const handleRun = () => {
    const htmlCode = codeExamples.html.code.join('\n');
    const jsCode = codeExamples.js.code.join('\n');
    
    // Build complete HTML document
    const fullHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Code Output</title>
        <style>
          * {
            margin: 0;
            padding: 0;
          }
          html {
            background-color: #020618;
            height: 100%;
            width: 100%;
          }
          body {
            background-color: #020618;
            color: #e2e8f0;
            font-family: system-ui, -apple-system, sans-serif;
            padding: 16px;
            min-height: 100%;
          }
          #name {
            color: white;
            margin: 0;
            font-size: 2em;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <h1 id="name">Lyna</h1>
        <script>
          ${jsCode}
        </script>
      </body>
      </html>
    `;
    
    setOutput(fullHtml);
  };

  const highlightCode = (line: string, language: string) => {
    if (!line.trim()) return <span>{line}</span>;

    if (language === 'html') {
      // HTML syntax highlighting
      const parts: ReactNode[] = [];      let key = 0;
      // Match HTML tags, attributes, and text
      const tagRegex = /(<\/?[^>]+>|&\w+;)/g;
      let lastIndex = 0;
      let match;

      while ((match = tagRegex.exec(line)) !== null) {
        // Add text before the tag
        if (match.index > lastIndex) {
          parts.push(<span key={key++} className="text-slate-300">{line.substring(lastIndex, match.index)}</span>);
        }
        
        const tag = match[0];
        // Check if it's a closing tag or opening tag
        if (tag.includes('=')) {
          // Has attributes
          const attrMatch = tag.match(/(<[^>]*?)(\s+\w+)(=)("[^"]*"|'[^']*')([^>]*>)/);
          if (attrMatch) {
            parts.push(<span key={key++} className="text-blue-400">{attrMatch[1]}</span>);
            parts.push(<span key={key++} className="text-purple-400">{attrMatch[2]}</span>);
            parts.push(<span key={key++} className="text-slate-300">{attrMatch[3]}</span>);
            parts.push(<span key={key++} className="text-green-400">{attrMatch[4]}</span>);
            parts.push(<span key={key++} className="text-blue-400">{attrMatch[5]}</span>);
          } else {
            parts.push(<span key={key++} className="text-blue-400">{tag}</span>);
          }
        } else {
          parts.push(<span key={key++} className="text-blue-400">{tag}</span>);
        }
        
        lastIndex = tagRegex.lastIndex;
      }
      
      // Add remaining text
      if (lastIndex < line.length) {
        parts.push(<span key={key++} className="text-slate-300">{line.substring(lastIndex)}</span>);
      }

      return <>{parts}</>;
    } else if (language === 'js') {
      // JavaScript syntax highlighting
      const keywords = /\b(const|let|var|function|return|if|else|for|while|document|addEventListener)\b/g;
      const strings = /(["'`])(.*?)\1/g;
      const comments = /(\/\/.*$)/g;
      
      let result = line;
      
      // Highlight comments first
      result = result.replace(comments, '<span class="text-slate-500">$1</span>');
      
      // Highlight strings
      result = result.replace(strings, '<span class="text-green-400">$&</span>');
      
      // Highlight keywords
      result = result.replace(keywords, '<span class="text-purple-400">$&</span>');
      
      // Highlight methods
      result = result.replace(/\.(querySelector|addEventListener|style|log)/g, '.<span class="text-yellow-400">$1</span>');
      
      return <span dangerouslySetInnerHTML={{ __html: result }} />;
    } else if (language === 'css') {
      // Config/CSS-like syntax highlighting
      if (line.includes(':')) {
        const parts = line.split(':');
        return (
          <>
            <span className="text-cyan-400">{parts[0]}</span>
            <span className="text-slate-300">:</span>
            <span className="text-yellow-400">{parts.slice(1).join(':')}</span>
          </>
        );
      }
      return <span className="text-slate-300">{line}</span>;
    }

    return <span>{line}</span>;
  };

  return (
    <section id="code-compiler" className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <h2 className="text-3xl font-bold text-white">Code Compiler</h2>
          <div className="flex flex-wrap items-center gap-2 justify-end">
            <Button 
              variant={selectedLanguage === 'html' ? 'default' : 'outline'}
              size="sm" 
              className={`text-xs ${
                selectedLanguage === 'html' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
              onClick={() => {
                setSelectedLanguage('html');
              }}
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
              onClick={() => {
                setSelectedLanguage('css');
              }}
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
              onClick={() => {
                setSelectedLanguage('js');
              }}
            >
              JS
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white text-sm"
              onClick={() => navigate('/compiler')}
            >
              <Play className="w-4 h-4 mr-2" />
              Try now
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 h-full">
          <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <div className="flex items-center gap-4">
                <span className="text-green-400 text-sm">●</span>
                <span className="text-slate-400 text-sm">{currentExample.fileName}</span>
              </div>
            </div>
            <div className="bg-slate-950 font-mono text-sm min-h-[300px] flex overflow-hidden">
              <div className="bg-slate-900 px-4 py-4 text-slate-500 select-none border-r border-slate-800 flex flex-col">
                {currentExample.code.map((line, index) => (
                  <div key={index} className="leading-6 whitespace-pre min-w-fit">
                    {index + 1}
                  </div>
                ))}
              </div>
              <div className="flex-1 overflow-auto py-4">
                {currentExample.code.map((line, index) => (
                  <div key={index} className="text-slate-300 leading-6 whitespace-pre px-4">
                    {highlightCode(line, selectedLanguage)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl border border-slate-800 overflow-hidden flex flex-col">
            <div className="bg-slate-800 px-4 py-3 flex items-center justify-between border-b border-slate-700">
              <span className="text-slate-400 text-sm">Output</span>
            </div>
            <div className="p-0 bg-slate-950 flex-1 overflow-hidden rounded-b-xl flex items-center justify-center">
              {output ? (
                <iframe 
                  ref={iframeRef}
                  srcDoc={output}
                  className="w-full h-full border-0"
                  style={{ minHeight: '300px' }}
                  sandbox="allow-scripts"
                />
              ) : (
                <div className="font-mono text-sm text-slate-400">// Click "Try now" to see your program...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}