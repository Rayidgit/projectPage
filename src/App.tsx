import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { SolutionArchitecture } from './components/SolutionArchitecture';
import { HardwareSoftware } from './components/HardwareSoftware';
import { TestingSection } from './components/TestingSection';
import { BudgetSection } from './components/BudgetSection';
import { TeamSection } from './components/TeamSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <IntroductionSection />
        <SolutionArchitecture />
        <HardwareSoftware />
        <TestingSection />
        <BudgetSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
