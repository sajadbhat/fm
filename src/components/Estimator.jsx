import React, { useState, useMemo } from 'react';

export default function Estimator({ onTransferBlueprint }) {
  const [archetype, setArchetype] = useState('agents');
  const [scale, setScale] = useState('enterprise');
  const [hosting, setHosting] = useState('vpc_vllm');
  const [speed, setSpeed] = useState('sprint');

  const estimate = useMemo(() => {
    let timeline = "3-4 Weeks";
    let team = "1 AI Architect + 2 Full-Stack Vibe Engineers";
    let techStack = "Next.js 15, FastAPI, LangGraph, Qdrant";
    let deliverables = [
      "Production-ready MVP codebase with 100% IP ownership",
      "Evaluation benchmarks with hallucination metrics",
      "Full CI/CD Docker and automated cloud deployment"
    ];

    if (archetype === 'vibe_mvp') {
      timeline = speed === 'sprint' ? "10-14 Days" : "2-3 Weeks";
      team = "1 Lead Vibe Architect + 1 AI Engineer";
      techStack = "Next.js, Supabase, Claude 3.5 Sonnet / OpenAI, Vercel";
      deliverables = [
        "Rapid functional AI product ready for customer testing",
        "Interactive generative UI components",
        "Clean, maintainable TypeScript & Python codebase"
      ];
    } else if (archetype === 'agents') {
      timeline = speed === 'sprint' ? "3-4 Weeks" : "4-6 Weeks";
      team = "1 Agentic System Lead + 2 AI Engineers + 1 QA";
      techStack = "LangGraph, CrewAI, Python, Redis, Milvus, FastAPI";
      deliverables = [
        "Multi-agent supervisor graph with tool-calling capabilities",
        "Long-term memory integration & state persistence",
        "Adversarial red-team safety testing & guardrails"
      ];
    } else if (archetype === 'rag_llm') {
      timeline = speed === 'sprint' ? "4-5 Weeks" : "6-8 Weeks";
      team = "1 Lead ML Scientist + 2 Data/Backend Engineers";
      techStack = "LoRA Fine-Tuning, vLLM, Qdrant/Milvus, Hugging Face, Cohere";
      deliverables = [
        "Hybrid RAG with neural reranking and grounded citations",
        "Private model checkpoints & FP8 quantization",
        "Private VPC deployment with SOC2/HIPAA compliance"
      ];
    } else if (archetype === 'fullstack_platform') {
      timeline = speed === 'sprint' ? "6-8 Weeks" : "8-12 Weeks";
      team = "1 Principal AI Architect + 3 Full-Stack Engineers + 1 MLOps";
      techStack = "Next.js 15, FastAPI, WebSockets, vLLM, Kubernetes, Docker";
      deliverables = [
        "End-to-end enterprise platform with auth, billing & RBAC",
        "Real-time streaming generative AI workflows",
        "Distributed inference cluster with auto-scaling & 99.9% SLA"
      ];
    }

    if (scale === 'enterprise') {
      timeline += " (Enterprise Hardened)";
      team += " + 1 Security Specialist";
    }

    return { timeline, team, techStack, deliverables };
  }, [archetype, scale, hosting, speed]);

  const handleTransfer = () => {
    if (onTransferBlueprint) {
      onTransferBlueprint({
        service: archetype === 'vibe_mvp' ? 'vibe_mvp' : archetype === 'agents' ? 'ai_agents' : archetype === 'rag_llm' ? 'llm_rag' : 'fullstack_app',
        description: `[Inquiry via Estimator Blueprint]\nArchetype: ${archetype}\nScale: ${scale}\nHosting: ${hosting}\nEstimated Timeline: ${estimate.timeline}\nPreferred Stack: ${estimate.techStack}\n\nProject Overview:\n`
      });
    }
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-24 relative bg-grid-pattern">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span>TRANSPARENT ARCHITECTURAL SCOPING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            Interactive Project <span className="gradient-text">Scope &amp; Blueprint Estimator</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
            Configure your AI project parameters to receive an instant architectural blueprint, estimated delivery timeline, and recommended squad composition.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Scoping Controls */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3 flex items-center gap-2">
              <span>⚙️</span>
              <span>Project Parameters</span>
            </h3>

            {/* 1. Archetype */}
            <div>
              <label htmlFor="calcArchetype" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">1. Project Archetype</label>
              <select
                id="calcArchetype"
                value={archetype}
                onChange={(e) => setArchetype(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              >
                <option value="vibe_mvp">⚡ Vibe Code Rapid MVP (72h to 2 weeks)</option>
                <option value="agents">🤖 Autonomous Multi-Agent Swarm (LangGraph / CrewAI)</option>
                <option value="rag_llm">🔍 Enterprise Sovereign Hybrid RAG &amp; LLM Fine-Tuning</option>
                <option value="fullstack_platform">💻 End-to-End Full-Stack Generative AI Platform</option>
              </select>
            </div>

            {/* 2. Scale & Security */}
            <div>
              <label htmlFor="calcScale" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">2. Scale &amp; Security Level</label>
              <select
                id="calcScale"
                value={scale}
                onChange={(e) => setScale(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              >
                <option value="startup">Seed / Growth Startup (Fast iteration)</option>
                <option value="enterprise">Enterprise Sovereign (SOC2, HIPAA, Zero Data Retention)</option>
              </select>
            </div>

            {/* 3. Deployment Topology */}
            <div>
              <label htmlFor="calcHosting" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">3. Target Hosting Topology</label>
              <select
                id="calcHosting"
                value={hosting}
                onChange={(e) => setHosting(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              >
                <option value="cloud_api">Cloud Model APIs (OpenAI / Anthropic / Gemini)</option>
                <option value="vpc_vllm">Dedicated Private VPC with vLLM (AWS / Azure / GCP)</option>
                <option value="bare_metal">On-Premises Bare-Metal GPU Hardware</option>
              </select>
            </div>

            {/* 4. Delivery Speed */}
            <div>
              <label htmlFor="calcSpeed" className="block text-xs font-mono text-slate-300 mb-1.5 uppercase tracking-wider">4. Delivery Velocity</label>
              <select
                id="calcSpeed"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-cyan-400 font-mono"
              >
                <option value="standard">Standard Engineering Cadence</option>
                <option value="sprint">⚡ Hyper-Velocity Vibe Sprint</option>
              </select>
            </div>

            <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 text-[11px] text-cyan-200 font-mono">
              ✦ All Futurematics contracts include 100% intellectual property, weights, and codebase transfer.
            </div>

          </div>

          {/* Right: Calculated Blueprint Output */}
          <div className="lg:col-span-6 glass-panel p-6 sm:p-8 bg-slate-950/90 border-cyan-500/40 relative shadow-[0_0_30px_rgba(0,242,254,0.15)]">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-semibold">Futurematics Scope Blueprint</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] font-mono font-bold">ESTIMATION READY</span>
            </div>

            <div className="space-y-4 my-5">
              
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Estimated Delivery Timeline</div>
                <div className="text-lg font-bold text-white mt-0.5 font-mono">{estimate.timeline}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Futurematics Squad Composition</div>
                <div className="text-xs font-semibold text-cyan-300 mt-0.5">{estimate.team}</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <div className="text-[10px] font-mono text-slate-400 uppercase">Recommended Technology Stack</div>
                <div className="text-xs font-semibold text-purple-300 mt-0.5 font-mono">{estimate.techStack}</div>
              </div>

              <div>
                <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Key Guaranteed Deliverables:</div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {estimate.deliverables.map((d, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="text-cyan-400">✦</span> {d}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <button
              onClick={handleTransfer}
              className="w-full btn-glow text-xs py-3 px-4 inline-flex items-center justify-center gap-2 mt-2 cursor-pointer"
            >
              <span>Transfer Blueprint to Consultation Form</span>
              <span>&darr;</span>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
