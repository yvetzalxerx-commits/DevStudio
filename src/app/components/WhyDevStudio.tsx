import { GraduationCap, Zap, Target } from 'lucide-react';

export function WhyDevStudio() {
  const benefits = [
    {
      icon: GraduationCap,
      title: 'Easy & fun learning',
      description: 'Interactive lessons designed for beginners'
    },
    {
      icon: Zap,
      title: 'Ready-made teacher lessons',
      description: 'Comprehensive curriculum for educators'
    },
    {
      icon: Target,
      title: 'Career preparation',
      description: 'Build real-world projects for your portfolio'
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12">Why DevStudio?</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-600/10 flex items-center justify-center border border-blue-600/30">
                    <Icon className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-slate-400">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
