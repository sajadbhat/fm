import React, { useState } from 'react';
import { contactInfo } from '../data/siteData';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#05070f]/90 border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Official Brand Logo */}
        <a href="#" className="fm-logo-container group" title={`${contactInfo.companyName} - ${contactInfo.tagline}`}>
          <img src="/assets/Full-FM-Logo.png" alt={contactInfo.companyName} className="fm-logo-img" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 glass-pill px-4 py-1.5 border border-white/10 text-xs font-medium text-slate-300">
          <a href="#services" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all">Services</a>
          <a href="#heritage" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all">Our Heritage</a>
          <a href="#leadership" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all">Leadership</a>
          <a href="#vibe-studio" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all flex items-center gap-1.5">
            <span>Vibe Studio</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"></span>
          </a>
          <a href="#architecture" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all">Architecture</a>
          <a href="#case-studies" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all">Case Studies</a>
          <a href="#estimator" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all">Cost Estimator</a>
          <a href="#contact" className="px-3 py-1.5 rounded-full hover:text-cyan-400 hover:bg-white/5 transition-all">Contact</a>
        </nav>

        {/* Header Action & Status */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
            <span className="live-beacon"></span>
            <span>Pune Lab: <strong className="text-emerald-400 font-semibold">Active</strong></span>
          </div>
          <a href="#contact" className="btn-glow text-xs py-2 px-4 inline-flex items-center gap-1.5">
            <span>Schedule Consultation</span>
            <span>&rarr;</span>
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMobile}
          className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>

      </div>

      {/* Mobile Slide Menu */}
      {mobileOpen && (
        <div className="md:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-6 py-5 space-y-3">
          <div className="pb-3 border-b border-slate-800/80 text-xs font-mono text-slate-400 space-y-1">
            <div>📞 <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-cyan-400 font-bold">{contactInfo.phone}</a></div>
            <div>✉️ <a href={`mailto:${contactInfo.email}`} className="text-slate-300">{contactInfo.email}</a></div>
          </div>
          <a href="#services" onClick={closeMobile} className="block text-sm font-medium text-slate-300 hover:text-cyan-400">Services</a>
          <a href="#heritage" onClick={closeMobile} className="block text-sm font-medium text-slate-300 hover:text-cyan-400">Our Heritage &amp; Experience</a>
          <a href="#leadership" onClick={closeMobile} className="block text-sm font-medium text-slate-300 hover:text-cyan-400">Leadership &amp; Founders</a>
          <a href="#vibe-studio" onClick={closeMobile} className="block text-sm font-medium text-slate-300 hover:text-cyan-400">Vibe Studio (Live Lab)</a>
          <a href="#architecture" onClick={closeMobile} className="block text-sm font-medium text-slate-300 hover:text-cyan-400">AI Architectures</a>
          <a href="#case-studies" onClick={closeMobile} className="block text-sm font-medium text-slate-300 hover:text-cyan-400">Case Studies &amp; Deployments</a>
          <a href="#estimator" onClick={closeMobile} className="block text-sm font-medium text-slate-300 hover:text-cyan-400">Scope &amp; Cost Calculator</a>
          <a href="#contact" onClick={closeMobile} className="btn-glow block text-center text-xs py-2.5 mt-2">
            Book Consultation ({contactInfo.phone}) &rarr;
          </a>
        </div>
      )}
    </header>
  );
}
