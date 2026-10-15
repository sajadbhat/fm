import React from 'react';

export default function MetricsBar() {
  const metrics = [
    { value: "10x", label: "Velocity Boost", desc: "From Vibe Intent to Production", color: "text-cyan-400" },
    { value: "99.6%", label: "Factual Precision", desc: "Hybrid RAG & Deterministic Guards", color: "text-emerald-400" },
    { value: "50M+", label: "Daily Tokens Served", desc: "Ultra-low Latency vLLM Clusters", color: "text-purple-400" },
    { value: "100%", label: "IP & Weights Retained", desc: "Zero Proprietary Data Lock-In", color: "text-cyan-300" }
  ];

  return (
    <section className="py-10 border-y border-white/[0.08] bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {metrics.map((m, i) => (
            <div key={i} className="space-y-1">
              <div className={`text-3xl sm:text-4xl font-extrabold font-mono ${m.color}`}>{m.value}</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium">{m.label}</div>
              <div className="text-[11px] text-slate-400 font-mono">{m.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
