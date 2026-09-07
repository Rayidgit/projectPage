import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { TechnologySection } from './components/TechnologySection';
import { Showcase } from './components/Showcase';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cluck-navy text-slate-100 selection:bg-emerald-500 selection:text-cluck-navy">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <TechnologySection />
        <Showcase />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
