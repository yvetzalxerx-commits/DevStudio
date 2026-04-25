import { MessageSquare, Eye, Download } from 'lucide-react';
import { Button } from './ui/button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Loader } from 'lucide-react';

export function BuilderShowcase() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/compiler');
    }, 500);
  };
  return (
    <section className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Describe it. Build it. <span className="text-blue-500">Instantly.</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Web Maker turns your ideas into fully-designed website prototypes in seconds, edit the code what you want — live AI refactor the site.
          </p>
        </div>

        <div className="flex justify-center gap-8 mb-12">
          {[
            { icon: MessageSquare, label: 'AI Prompt', subtitle: 'Describe your idea' },
            { icon: Eye, label: 'Use Reader', subtitle: 'Review & refine' },
            { icon: Download, label: 'Download Ready', subtitle: 'Export your code' }
          ].map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-3 border border-blue-600/30">
                  <Icon className="w-8 h-8 text-blue-500" />
                </div>
                <h4 className="text-white font-semibold mb-1">{step.label}</h4>
                <p className="text-slate-400 text-sm">{step.subtitle}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-900 rounded-xl border border-slate-700 overflow-hidden shadow-2xl">
            <div className="bg-slate-800 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-slate-400 text-sm ml-4">Web Maker - AI Builder</span>
            </div>
            <div className="p-8">
              <div className="bg-slate-800 rounded-lg p-6 mb-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Streamline Tour</p>
                    <p className="text-slate-400 text-sm">Web Maker</p>
                  </div>
                </div>
                <div className="bg-slate-900 rounded p-4 flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded overflow-hidden">
                    <img src="/silhouette.png" alt="Silhouette" className="w-full h-full object-cover" />
                  </div>
                  <p className="text-white">Create a modern portfolio website with a dark theme, featuring sections for projects, about me, and contact information.</p>
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Describe what you want..."
                  className="flex-1 bg-slate-800 text-white px-4 py-2 rounded border border-slate-700 focus:outline-none focus:border-blue-600"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">Send</Button>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8" onClick={handleNavigate} disabled={isLoading}>
              {isLoading ? <Loader className="w-4 h-4 animate-spin" /> : 'Try Web Maker Free'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
