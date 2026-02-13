import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Innovation from './components/Innovation';
import Founder from './components/Founder';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="dashboard">
          <DashboardPreview />
        </div>
        <div id="innovation">
          <Innovation />
        </div>
        <Founder />
        <div id="pricing">
          <Pricing />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;