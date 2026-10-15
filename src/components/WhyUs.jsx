import React from 'react';

const advantages = [
  {
    icon: '🛡️',
    title: '100% IP & Model Ownership',
    desc: 'Every line of code, fine-tuned adapter weight, synthetic training set, and pipeline belongs entirely to your company. Zero vendor lock-in.'
  },
  {
    icon: '⚡',
    title: 'Vibe Velocity + Military Rigor',
    desc: 'We leverage vibe coding to prototype at breakneck speed, then apply rigorous automated test harnesses, hallucination benchmarks, and type safety.'
  },
  {
    icon: '🔒',
    title: 'Sovereign & Zero-Leak AI',
    desc: 'Build compliant AI pipelines meeting SOC2, HIPAA, and GDPR standards. Deploy on your own private cloud or on-premise GPU clusters without cloud telemetry.'
  },
  {
    icon: '🧩',
    title: 'Full-Stack Synthesis',
    desc: 'We don’t just write prompts; we build end-to-end distributed architectures: reactive frontends, streaming gateways, vector databases, and MLOps.'
  },
  {
    icon: '📉',
    title: 'Inference Cost Engineering',
    desc: 'Through semantic caching, FP8 quantization, and vLLM continuous batching, we reduce ongoing inference costs by up to 65%.'
  },
  {
    icon: '🤝',
    title: 'Dedicated AI SWAT Squads',
    desc: 'Work directly with senior AI architects and vibe engineers who understand LLM internals, attention mechanics, and scalable distributed systems.'
  }
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span>THE FUTUREMATICS STANDARD</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Why Visionaries Choose <br />
            <span className="gradient-text">Futurematics Pvt Ltd</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            We bridge the gap between speculative AI research and battle-hardened enterprise software delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <div key={i} className="glass-panel p-6 space-y-3">
              <div className="text-2xl text-cyan-400">{item.icon}</div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
