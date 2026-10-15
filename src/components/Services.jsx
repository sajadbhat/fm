import React from 'react';

const services = [
  {
    icon: '⚡',
    pillar: 'Pillar 01',
    title: 'Vibe Coding & Rapid MVP Delivery',
    desc: 'Translate high-level creative vision and architectural vibes directly into fully functional, production-grade applications. We combine AI-augmented prompt engineering, automated unit testing, and continuous code synthesis to launch MVPs in 72 hours.',
    points: ['Prompt-to-Architecture scaffolding', 'Iterative human-in-the-loop pairing', 'Zero technical debt with auto-linting'],
    tags: ['Vibe Code', 'TypeScript', 'Tailwind'],
    accent: 'cyan'
  },
  {
    icon: '🧠',
    pillar: 'Pillar 02',
    title: 'Enterprise LLMs & Fine-Tuning',
    desc: 'Unlock the full power of your proprietary corporate knowledge. We specialize in domain-adapted LoRA/QLoRA fine-tuning, RLHF/DPO alignment, and sovereign on-premise foundation models running inside your secure VPC.',
    points: ['LoRA / QLoRA parameter adaptation', 'Synthetic domain dataset generation', 'DeepSeek, Llama 3, Mistral fine-tunes'],
    tags: ['LoRA', 'PyTorch', 'HuggingFace'],
    accent: 'purple'
  },
  {
    icon: '🤖',
    pillar: 'Pillar 03',
    title: 'Autonomous Multi-Agent Swarms',
    desc: 'Move beyond simple chat interfaces. We engineer complex autonomous swarms that reason, self-critique, execute tools, query relational and vector databases, and execute multi-step workflows with zero human intervention.',
    points: ['Hierarchical supervisor-worker DAGs', 'Sandboxed deterministic tool calling', 'LangGraph, CrewAI & AutoGen architectures'],
    tags: ['LangGraph', 'CrewAI', 'Tool Calling'],
    accent: 'emerald'
  },
  {
    icon: '💻',
    pillar: 'Pillar 04',
    title: 'Full-Stack AI Applications',
    desc: 'State-of-the-art web and mobile experiences crafted for AI. Reactive streaming UIs, generative components, full-duplex voice assistants, WebSockets, and asynchronous distributed backends in Next.js 15, FastAPI, and Go.',
    points: ['Streaming Generative UI (SSE & WebSockets)', 'Real-time speech-to-speech agents', 'Enterprise auth, RBAC & SOC2 audit trails'],
    tags: ['Next.js 15', 'FastAPI', 'WebSockets'],
    accent: 'blue'
  },
  {
    icon: '🔍',
    pillar: 'Pillar 05',
    title: 'Enterprise Hybrid RAG & Vector Search',
    desc: 'Eliminate hallucinations with mathematical rigor. We build hybrid vector search systems combining dense embeddings with sparse BM25 lexical search and neural cross-encoders for 99.8% citation accuracy across millions of documents.',
    points: ['Reciprocal Rank Fusion (RRF)', 'Multimodal PDF, tabular & OCR ingestion', 'Sub-30ms vector search across 50M+ chunks'],
    tags: ['Qdrant', 'Milvus', 'Cohere Rerank'],
    accent: 'cyan'
  },
  {
    icon: '🚀',
    pillar: 'Pillar 06',
    title: 'AI Infrastructure, vLLM & MLOps',
    desc: 'Slash your cloud GPU inference bill by up to 65% while tripling token throughput. We optimize inference clusters with vLLM, TensorRT-LLM, FP8 quantization, continuous batching, and automated evaluation harnesses.',
    points: ['vLLM PagedAttention deployment', 'FP8 / AWQ quantization without quality loss', 'Automated model drift & red-teaming'],
    tags: ['vLLM', 'Triton', 'Docker'],
    accent: 'purple'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span>PILLARS OF FUTUREMATICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Comprehensive AI Engineering <br />
            <span className="gradient-text">Engineered for Radical Velocity</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            From experimental generative vibes to mission-critical multi-agent networks, Futurematics Pvt. Ltd. delivers end-to-end full-stack AI capabilities.
          </p>
        </div>

        {/* 6 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, i) => (
            <div key={i} className="glass-panel p-8 relative flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-2xl text-cyan-400 mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest mb-1">{item.pillar}</div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-slate-400 font-mono">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2">
                      <span className="text-cyan-400">✦</span> {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="tech-badge">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
