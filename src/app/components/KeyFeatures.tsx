import { Sparkles, Layout, Trophy } from 'lucide-react';

export function KeyFeatures() {
  const features = [
    {
      icon: Sparkles,
      title: 'AI-Powered Assistance',
      description: 'Instant feedback & guidance'
    },
    {
      icon: Layout,
      title: 'Hybrid Builder',
      description: 'Drag-and-drop + real code editing'
    },
    {
      icon: Trophy,
      title: 'Gamified Learning',
      description: 'Track progress with real-world projects'
    }
  ];

  return (
    <section id="features" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-slate-900/50 border border-slate-800 rounded-xl p-8 hover:border-blue-600/50 transition-all"
              >
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
