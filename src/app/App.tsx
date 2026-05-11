import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { KeyFeatures } from './components/KeyFeatures';
import { BuilderShowcase } from './components/BuilderShowcase';
import { CodeHandbook } from './components/CodeHandbook';
import { CodeCompiler } from './components/CodeCompiler';
import { CodeCompilerPage } from './components/CodeCompilerPage';
import { AIWebMaker } from './components/AIWebMaker';
import { WhyDevStudio } from './components/WhyDevStudio';
import { Footer } from './components/Footer';

function HomePage() {
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

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/compiler" element={<CodeCompilerPage />} />
        <Route path="/webmaker" element={<AIWebMaker />} />
      </Routes>
    </Router>
  );
}
