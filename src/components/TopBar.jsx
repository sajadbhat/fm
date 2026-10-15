import React from 'react';
import { contactInfo } from '../data/siteData';

export default function TopBar() {
  return (
    <div className="bg-[#03050c] border-b border-white/[0.08] text-[11px] font-mono text-slate-400 py-2 relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-1.5 text-slate-300">
            <span className="text-cyan-400">📞</span>
            <span>Have a question?</span>
            <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-white hover:text-cyan-400 font-bold transition-colors">
              {contactInfo.phone}
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
            <span className="text-cyan-400">✉️</span>
            <span>Email:</span>
            <a href={`mailto:${contactInfo.email}`} className="text-cyan-300 hover:underline">
              {contactInfo.email}
            </a>
          </div>
          <div className="hidden md:flex items-center gap-1.5 text-slate-400">
            <span className="text-emerald-400">🕒</span>
            <span>{contactInfo.hours}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-slate-300">📍 905/59 Future Towers, Amanora Park Town, Hadapsar, Pune</span>
          <span className="hidden lg:inline text-slate-600">•</span>
          <span className="hidden lg:inline text-cyan-400 font-medium italic">"{contactInfo.tagline}"</span>
        </div>
      </div>
    </div>
  );
}
