import React, { useState } from 'react';
import { architectureData } from '../data/siteData';

export default function ArchitectureMatrix() {
  const [selectedArch, setSelectedArch] = useState('agents');
  const activeData = architectureData[selectedArch];

  const tabs = [
    { key: 'agents', label: '1. Multi-Agent Swarms' },
    { key: 'rag', label: '2. Enterprise Hybrid RAG' },
    { key: 'finetune', label: '3. Private Sovereign LLM & vLLM' },
    { key: 'fullstack', label: '4. Reactive Full-Stack AI' }
  ];

  return (
    <section id="architecture" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold">
            <span>ENGINEERING TOPOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Battle-Tested <span className="gradient-text">Architectural Blueprints</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Examine the exact topology Futurematics deploys for autonomous agent networks, enterprise RAG, sovereign LLMs, and reactive full-stack web applications.
          </p>
        </div>

        {/* Architecture Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setSelectedArch(t.key)}
              className={`px-4 py-2 rounded-xl border text-xs font-mono font-semibold transition-all cursor-pointer ${
                selectedArch === t.key
                  ? 'border-cyan-500/50 bg-cyan-500/20 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-white'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Active Architecture Presentation Card */}
        <div className="glass-panel p-6 sm:p-10 relative">
          
          {/* Card Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{activeData.title}</h3>
              <p className="text-xs sm:text-sm text-cyan-400 font-mono mt-1">{activeData.tagline}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400">Target Throughput:</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-semibold">
                {activeData.throughput}
              </span>
            </div>
          </div>

          {/* 4-Stage Node Diagram */}
          <div className="my-8">
            <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest mb-4">Pipeline Execution Stages:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {activeData.nodes.map((n, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-xl bg-slate-900/90 border ${n.color} transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,242,254,0.15)]`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{n.icon}</span>
                    <div>
                      <div className="text-[10px] font-mono text-cyan-400">STAGE 0{i + 1}</div>
                      <div className="text-sm font-bold text-white">{n.name}</div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed">{n.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Highlights */}
          <div className="pt-6 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-3">Architectural Guarantees:</div>
              <ul className="space-y-2">
                {activeData.features.map((f, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className="text-cyan-400 font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-end items-start md:items-end">
              <a href="#contact" className="btn-glow text-xs py-2.5 px-5 inline-flex items-center gap-1.5">
                <span>Deploy This Topology</span> &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
