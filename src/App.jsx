import React, { useState } from 'react';
import NeuralCanvas from './components/NeuralCanvas';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MetricsBar from './components/MetricsBar';
import HeritageSlider from './components/HeritageSlider';
import Services from './components/Services';
import VibeStudio from './components/VibeStudio';
import ArchitectureMatrix from './components/ArchitectureMatrix';
import CaseStudies from './components/CaseStudies';
import Estimator from './components/Estimator';
import WhyUs from './components/WhyUs';
import Leadership from './components/Leadership';
import FAQ from './components/FAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [formData, setFormData] = useState({
    contactName: '',
    contactEmail: '',
    contactCompany: '',
    contactService: 'ai_agents',
    contactDesc: '',
    contactNDA: false
  });

  const handlePrefillContact = (promptText, domainTitle) => {
    setFormData((prev) => ({
      ...prev,
      contactService: 'vibe_mvp',
      contactDesc: `[Inquiry from Vibe Studio]\nBlueprint: ${domainTitle}\nPrompt: "${promptText}"\n\nLooking to build and deploy this system with Futurematics Pvt Ltd.`
    }));
  };

  const handleTransferBlueprint = ({ service, description }) => {
    setFormData((prev) => ({
      ...prev,
      contactService: service,
      contactDesc: description
    }));
  };

  return (
    <div className="bg-[#05070f] text-slate-100 relative min-h-screen selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Ambient Glow Orbs */}
      <div className="glow-orb glow-orb-cyan w-[550px] h-[550px] top-[-100px] left-1/2 -translate-x-1/2 opacity-40"></div>
      <div className="glow-orb glow-orb-purple w-[450px] h-[450px] top-[700px] left-[-150px] opacity-30"></div>
      <div className="glow-orb glow-orb-emerald w-[500px] h-[500px] top-[1600px] right-[-150px] opacity-25"></div>

      {/* Particle Network Canvas */}
      <NeuralCanvas />

      {/* Top Utility Bar */}
      <TopBar />

      {/* Sticky Navbar */}
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <MetricsBar />
        <HeritageSlider />
        <Services />
        <VibeStudio onPrefillContact={handlePrefillContact} />
        <ArchitectureMatrix />
        <CaseStudies />
        <Estimator onTransferBlueprint={handleTransferBlueprint} />
        <WhyUs />
        <Leadership />
        <FAQ />
        <ContactSection formData={formData} setFormData={setFormData} />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
}
