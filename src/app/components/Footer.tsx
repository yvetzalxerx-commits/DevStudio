import { ArrowUp } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-12 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center text-slate-500 text-sm">
          © 2026 DevStudio. All rights reserved.
        </div>
      </div>
      
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
}
