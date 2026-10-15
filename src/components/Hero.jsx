import React, { useState } from 'react';
import { terminalPresets } from '../data/siteData';

export default function Hero() {
  const [activePreset, setActivePreset] = useState('agent_swarm');
  const [viewMode, setViewMode] = useState('code'); // 'code' | 'preview'

  const currentPreset = terminalPresets[activePreset];

  return (
    <section className="pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Pitch */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Company Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono">
              <span className="live-beacon"></span>
              <span className="font-semibold tracking-wide">EST. 2013 • PUNE, INDIA • WE BUILD QUALITY AND TRUST</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Architecting the Future with <br />
              <span className="gradient-text">Vibe Code &amp; Autonomous AI</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Founded in 2013 in Pune, India, <strong>Futurematics Pvt. Ltd.</strong> blends over a decade of software engineering rigor with frontier <strong>Vibe Coding</strong>, <strong>Autonomous Agent Swarms</strong>, and <strong>Sovereign LLMs</strong> — transforming natural language intent into resilient, mission-critical AI applications.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a href="#vibe-studio" className="btn-glow text-sm py-3 px-6 inline-flex items-center gap-2">
                <span>Launch Interactive Vibe Lab</span>
                <span className="text-base">⚡</span>
              </a>
              <a href="#contact" className="btn-glow-outline text-sm py-3 px-6 inline-flex items-center gap-2">
                <span>Schedule AI Consultation</span>
                <span>&rarr;</span>
              </a>
            </div>

            {/* Bleeding Edge Tech Stack */}
            <div className="pt-8 border-t border-slate-800/80">
              <div className="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-3">
                Engineered with Foundation Models &amp; Agent Frameworks:
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <span className="tech-badge">DeepSeek R1/V3</span>
                <span className="tech-badge">Claude 3.5 Sonnet</span>
                <span className="tech-badge">OpenAI GPT-4o</span>
                <span className="tech-badge">Gemini 2.0 Flash</span>
                <span className="tech-badge">Llama 3.3 Sovereign</span>
                <span className="tech-badge">LangGraph</span>
                <span className="tech-badge">vLLM Inference</span>
                <span className="tech-badge">Next.js 15</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Qdrant &amp; Milvus</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Live Vibe Terminal */}
          <div className="lg:col-span-5">
            <div className="terminal-window scanline-effect shadow-2xl relative">
              
              {/* Terminal Header */}
              <div className="terminal-header">
                <div className="flex items-center gap-1.5">
                  <span className="terminal-dot terminal-dot-red"></span>
                  <span className="terminal-dot terminal-dot-yellow"></span>
                  <span className="terminal-dot terminal-dot-green"></span>
                  <span className="text-xs font-mono text-slate-300 ml-2">{currentPreset.title}</span>
                </div>
                
                {/* View Mode Switcher */}
                <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-0.5 border border-slate-700/60 text-[11px] font-mono">
                  <button
                    onClick={() => setViewMode('code')}
                    className={`px-2 py-0.5 rounded transition-all ${viewMode === 'code' ? 'bg-cyan-500/30 text-cyan-300 font-medium' : 'text-slate-400 hover:text-white'}`}
                  >
                    Code
                  </button>
                  <button
                    onClick={() => setViewMode('preview')}
                    className={`px-2 py-0.5 rounded transition-all ${viewMode === 'preview' ? 'bg-cyan-500/30 text-cyan-300 font-medium' : 'text-slate-400 hover:text-white'}`}
                  >
                    Live UI
                  </button>
                </div>
              </div>

              {/* Preset Selectors */}
              <div className="flex items-center border-b border-slate-800/80 bg-slate-950/90 overflow-x-auto px-2 py-1.5 gap-1.5 text-[11px] font-mono">
                {Object.keys(terminalPresets).map((key) => {
                  const labels = {
                    agent_swarm: 'Swarm Agents',
                    rag_pipeline: 'Hybrid RAG',
                    fullstack_ai: 'Full-Stack AI',
                    finetune_lora: 'vLLM & LoRA'
                  };
                  const isSelected = activePreset === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActivePreset(key)}
                      className={`px-2.5 py-1 rounded border transition-all ${
                        isSelected
                          ? 'text-cyan-400 bg-cyan-500/20 border-cyan-500/50'
                          : 'border-transparent text-slate-400 hover:text-white'
                      }`}
                    >
                      {labels[key] || key}
                    </button>
                  );
                })}
              </div>

              {/* Terminal Body */}
              <div className="min-h-[290px] max-h-[320px] overflow-y-auto p-4 text-xs font-mono leading-relaxed bg-[#080c16]">
                {viewMode === 'code' ? (
                  <pre className="text-cyan-200/90 whitespace-pre font-mono overflow-x-auto">
                    {currentPreset.code}
                  </pre>
                ) : (
                  <div className="p-4 space-y-3 font-sans">
                    <div className="flex items-center justify-between pb-2 border-b border-cyan-500/20">
                      <div className="flex items-center gap-2">
                        <span className="live-beacon"></span>
                        <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                          {currentPreset.type} Active
                        </span>
                      </div>
                      <span className="text-[11px] text-emerald-400 font-mono">Verified 99.8%</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-700/60">
                        <div className="text-slate-400 text-[10px] uppercase font-mono">Engine Status</div>
                        <div className="text-emerald-400 font-semibold mt-0.5">● Real-time Serving</div>
                        <div className="text-slate-400 text-[11px] mt-1">Throughput: {currentPreset.metrics.throughput}</div>
                      </div>
                      <div className="p-2.5 rounded-lg bg-slate-900/80 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,242,254,0.1)]">
                        <div className="text-slate-400 text-[10px] uppercase font-mono">Inference Latency</div>
                        <div className="text-cyan-400 font-semibold mt-0.5">⚡ {currentPreset.metrics.latency}</div>
                        <div className="text-slate-300 text-[11px] mt-1">{currentPreset.metrics.activeAgents}</div>
                      </div>
                    </div>

                    <div className="p-2 rounded bg-cyan-950/40 border border-cyan-500/30 text-[11px] text-cyan-200 font-mono">
                      "Futurematics Core Pipeline: Zero data leaks, sovereign deployment guaranteed."
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Telemetry Footer */}
              <div className="bg-slate-950/95 border-t border-slate-800/80 px-4 py-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span>Engine: <strong className="text-cyan-400 font-medium">{currentPreset.type}</strong></span>
                  <span>Latency: <strong className="text-emerald-400 font-medium">{currentPreset.metrics.latency}</strong></span>
                </div>
                <div>
                  <span>Throughput: <strong className="text-purple-400 font-medium">{currentPreset.metrics.throughput}</strong></span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
