import { Button } from './ui/button';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { Loader } from 'lucide-react';

export function Hero() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigate = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate('/compiler');
    }, 500);
  };
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Build Website.<br />
              Master code.<br />
              <span className="text-blue-500">With Ai</span>
            </h1>
            <p className="text-slate-400 text-lg mb-8 max-w-xl">
              The AI-powered coding assistant with an interactive drag-and-drop & code builder. Personalized paths, instant feedback, and gamified learning.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6" onClick={handleNavigate} disabled={isLoading}>
              {isLoading ? <Loader className="w-6 h-6 animate-spin" /> : 'Launch Interactive Builder'}
            </Button>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1753715613373-90b1ea010731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBzY3JlZW4lMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NzU2MjExOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Code editor with AI"
                className="w-full h-auto"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-blue-600 rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-blue-500/50">
                  <span className="text-white font-bold text-2xl">AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
