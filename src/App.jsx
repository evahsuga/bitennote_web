import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { SolutionSection } from './components/sections/SolutionSection';
import { BridgeSection } from './components/sections/BridgeSection';
import { StepsSection } from './components/sections/StepsSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { DeveloperSection } from './components/sections/DeveloperSection';
import { FAQSection } from './components/sections/FAQSection';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BridgeSection />
      <StepsSection />
      <TestimonialsSection />
      <DeveloperSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
