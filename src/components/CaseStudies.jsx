import React, { useState } from 'react';
import { caseStudiesData } from '../data/siteData';

export default function CaseStudies() {
  const [filter, setFilter] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All Projects' },
    { key: 'rag_llm', label: 'LLMs & RAG' },
    { key: 'agents', label: 'Autonomous Agents' },
    { key: 'fullstack_app', label: 'Full-Stack AI Apps' },
    { key: 'vibe_mvp', label: 'Vibe Code MVPs' }
  ];

  const filteredCases = filter === 'all'
    ? caseStudiesData
    : caseStudiesData.filter((c) => c.category === filter);

  return (
    <section id="case-studies" className="py-24 bg-slate-950/70 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
            <span>PROVEN ENTERPRISE IMPACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Case Studies &amp; <span className="gradient-text">Shipped AI Systems</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Explore how Futurematics Pvt Ltd engineered production AI applications that saved thousands of engineering hours and created measurable ROI.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-1.5 rounded-lg border text-xs font-mono font-semibold transition-all cursor-pointer ${
                filter === tab.key
                  ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-400'
                  : 'border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.map((item) => (
            <div
              key={item.id}
              className="glass-panel p-6 flex flex-col justify-between group hover:border-cyan-400/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="tech-badge tech-badge-cyan font-mono">{item.client}</span>
                  <span className="text-xs font-mono text-emerald-400 font-semibold">{item.metric.split('•')[0]}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">{item.desc}</p>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.stack.map((s, idx) => (
                    <span key={idx} className="tech-badge">{s}</span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedCase(item)}
                  className="w-full btn-glass text-xs py-2 inline-flex items-center justify-center gap-1.5 group-hover:border-cyan-400/40 cursor-pointer"
                >
                  <span>Explore Architecture &amp; Metrics</span> &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Study Interactive Detail Modal */}
      {selectedCase && (
        <div
          onClick={() => setSelectedCase(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel max-w-2xl w-full p-6 sm:p-8 bg-[#090d1a] border border-cyan-500/40 relative shadow-2xl animate-fadeIn"
          >
            <button
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-xl p-1 cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="tech-badge tech-badge-cyan font-mono">{selectedCase.client}</span>
              <span className="text-xs font-mono text-emerald-400 font-semibold">{selectedCase.metric}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-3">{selectedCase.title}</h3>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">{selectedCase.desc}</p>

            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2 mb-4">
              <div className="font-bold text-cyan-400 font-mono text-[11px] uppercase">Engineering Breakdown:</div>
              <p>{selectedCase.details}</p>
            </div>

            <div className="mb-6">
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">Tech Stack:</div>
              <div className="flex flex-wrap gap-1.5">
                {selectedCase.stack.map((s, idx) => (
                  <span key={idx} className="tech-badge tech-badge-cyan">{s}</span>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <a
                href="#contact"
                onClick={() => setSelectedCase(null)}
                className="btn-glow text-xs py-2 px-4"
              >
                Inquire About Similar Build &rarr;
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
