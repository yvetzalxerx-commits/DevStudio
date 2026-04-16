import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyFeatures } from './components/KeyFeatures';
import { BuilderShowcase } from './components/BuilderShowcase';
import { CodeHandbook } from './components/CodeHandbook';
import { CodeCompiler } from './components/CodeCompiler';
import { WhyDevStudio } from './components/WhyDevStudio';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Header />
      <main>
        <Hero />
        <KeyFeatures />
        <BuilderShowcase />
        <CodeHandbook />
        <CodeCompiler />
        <WhyDevStudio />
      </main>
      <Footer />
    </div>
  );
}
