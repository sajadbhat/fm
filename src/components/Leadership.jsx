import React from 'react';
import { foundersData } from '../data/siteData';

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 relative bg-grid-pattern border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span className="live-beacon"></span>
            <span>EXECUTIVE LEADERSHIP</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Meet the <span className="gradient-text">Founders &amp; Directors</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            The driving minds behind <strong>Futurematics Pvt Ltd</strong> — combining over a decade of software engineering excellence with frontier AI, Vibe Coding, and Autonomous Agent systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {foundersData.map((f) => (
            <div
              key={f.id}
              className={`glass-panel p-8 relative overflow-hidden group hover:border-${f.accent}-400/50 transition-all duration-300 flex flex-col justify-between`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-${f.accent}-500/10 rounded-full blur-3xl group-hover:bg-${f.accent}-500/20 transition-all`}></div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${f.accent}-500/20 to-blue-600/20 border border-${f.accent}-500/40 flex items-center justify-center text-${f.accent}-300 text-2xl font-bold font-mono shadow-[0_0_20px_rgba(0,242,254,0.2)]`}>
                    {f.initials}
                  </div>
                  <div>
                    <h3 className={`text-2xl font-extrabold text-white group-hover:text-${f.accent}-300 transition-colors`}>
                      {f.name}
                    </h3>
                    <div className={`text-xs font-mono font-semibold text-${f.accent}-400 mt-0.5`}>
                      {f.title}
                    </div>
                    <span className={`inline-block mt-1 px-2.5 py-0.5 rounded bg-${f.accent}-500/10 text-${f.accent}-300 text-[10px] font-mono border border-${f.accent}-500/30`}>
                      {f.badge}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {f.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-slate-400">
                <span className="text-slate-300">✦ Executive Leadership</span>
                <span className={`text-${f.accent}-400 font-semibold`}>Futurematics Pvt. Ltd.</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
