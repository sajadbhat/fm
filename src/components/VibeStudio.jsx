import React, { useState } from 'react';

const presets = [
  { label: '📊 SEC Financial Swarm', prompt: 'Deploy a multi-agent autonomous financial research swarm that ingests SEC 10-K filings with deterministic math verification' },
  { label: '🎙️ HIPAA Telemedicine Voice AI', prompt: 'Build a real-time full-duplex voice AI agent with HIPAA-compliant EHR charting and zero cloud data retention' },
  { label: '💻 Generative UI Dashboard', prompt: 'Vibe code a full-stack generative SaaS dashboard in Next.js 15 that streams dynamic chart components from LLM prompts' }
];

export default function VibeStudio({ onPrefillContact }) {
  const [prompt, setPrompt] = useState('');
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [blueprint, setBlueprint] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSynthesize = (targetPrompt) => {
    const query = (targetPrompt || prompt).trim();
    if (!query) return;

    setIsSynthesizing(true);
    setBlueprint(null);
    setStepIndex(1);

    setTimeout(() => setStepIndex(2), 650);
    setTimeout(() => setStepIndex(3), 1300);

    setTimeout(() => {
      setIsSynthesizing(false);
      setStepIndex(4);

      const isHealthcare = query.toLowerCase().includes('health') || query.toLowerCase().includes('doctor') || query.toLowerCase().includes('telemedicine');
      const isFinance = query.toLowerCase().includes('financ') || query.toLowerCase().includes('sec') || query.toLowerCase().includes('market');

      let domainName = "Enterprise AI Architecture";
      let stackName = "Next.js 15 + FastAPI + LangGraph + vLLM";
      let speedStat = "MVP in 72 Hours";
      let securityStat = "SOC2 / Zero Data Retention";

      if (isHealthcare) {
        domainName = "HIPAA-Compliant Clinical Agent Swarm";
        stackName = "Private Med-Llama 3 + Hybrid Vector DB + Voice SSE";
        securityStat = "HIPAA BAA & Zero Cloud Logging";
      } else if (isFinance) {
        domainName = "Sub-Second Financial Intelligence Copilot";
        stackName = "DeepSeek R1 / Claude 3.5 + Milvus Vector + Cross-Encoder";
        securityStat = "Audited SEC Guardrails & Deterministic Verification";
      }

      setBlueprint({
        title: domainName,
        stack: stackName,
        speed: speedStat,
        security: securityStat,
        prompt: query
      });
    }, 2000);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`Futurematics Pvt Ltd AI Architecture Specification\nBlueprint: ${blueprint?.title}\nStack: ${blueprint?.stack}\nSecurity: ${blueprint?.security}\nPrompt: "${blueprint?.prompt}"\n\nReady for enterprise review.`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDeployBlueprint = () => {
    if (onPrefillContact && blueprint) {
      onPrefillContact(blueprint.prompt, blueprint.title);
    }
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="vibe-studio" className="py-24 bg-slate-950/80 border-t border-slate-800/80 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span className="live-beacon"></span>
            <span>INTERACTIVE WORKBENCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            The Futurematics <span className="gradient-text">Vibe Studio Lab</span>
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            Experience our Vibe Code pipeline in action. Type any natural language AI concept or choose a preset to see how Futurematics decomposes, scaffolds, and deploys it.
          </p>
        </div>

        {/* Interactive Workbench Card */}
        <div className="glass-panel p-6 sm:p-8 relative">
          
          {/* Preset Chips */}
          <div className="mb-4">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Try a Preset Vibe:</span>
            <div className="flex flex-wrap gap-2">
              {presets.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setPrompt(item.prompt);
                    handleSynthesize(item.prompt);
                  }}
                  className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-cyan-400 hover:text-cyan-300 transition-all font-mono cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Bar */}
          <div className="space-y-3">
            <div className="relative">
              <textarea
                rows={3}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-slate-900/90 border border-cyan-500/30 rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 font-mono transition-all"
                placeholder="Enter your vibe prompt (e.g., 'Build an autonomous GitHub PR code reviewer that runs linting, unit tests, and security audits autonomously')..."
              />
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[11px] font-mono text-slate-500">Press Synthesize to invoke the Futurematics pipeline</span>
              <button
                disabled={isSynthesizing}
                onClick={() => handleSynthesize(prompt)}
                className="btn-glow text-xs py-2.5 px-6 inline-flex items-center gap-2 cursor-pointer"
              >
                {isSynthesizing ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black inline" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                    </svg>
                    <span>Synthesizing Vibe...</span>
                  </>
                ) : (
                  <>
                    <span>Synthesize Architecture</span>
                    <span className="text-sm">⚡</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Step Progress Container */}
          {(isSynthesizing || blueprint) && (
            <div className="mt-6 space-y-3 font-mono text-xs">
              {stepIndex >= 1 && (
                <div className="flex items-center gap-2 text-cyan-400">
                  <span className="live-beacon"></span>
                  <span>[Step 1/4] Deconstructing Intent &amp; Token Primitives...</span>
                </div>
              )}
              {stepIndex >= 2 && (
                <div className="flex items-center gap-2 text-purple-400">
                  <span>✓</span>
                  <span>[Step 2/4] Assembling Multi-Agent Swarm &amp; Tool Calling Schema...</span>
                </div>
              )}
              {stepIndex >= 3 && (
                <div className="flex items-center gap-2 text-emerald-400">
                  <span>✓</span>
                  <span>[Step 3/4] Binding Vector Store, LangGraph Nodes &amp; Guardrails...</span>
                </div>
              )}
            </div>
          )}

          {/* Dynamic Blueprint Card */}
          {blueprint && (
            <div className="mt-5 p-5 rounded-xl bg-slate-900/90 border border-cyan-500/40 shadow-[0_0_30px_rgba(0,242,254,0.15)] animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-700/60">
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider">Futurematics Blueprint Generated</div>
                  <div className="text-base font-bold text-white mt-0.5">{blueprint.title}</div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold border border-emerald-500/30">
                  {blueprint.speed}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Recommended Stack</div>
                  <div className="text-xs font-semibold text-cyan-300 mt-1">{blueprint.stack}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Security Benchmark</div>
                  <div className="text-xs font-semibold text-purple-300 mt-1">{blueprint.security}</div>
                </div>
                <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Futurematics Squad</div>
                  <div className="text-xs font-semibold text-emerald-300 mt-1">1 AI Lead + 2 Vibe Engineers</div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-slate-950/50 border border-cyan-500/20 text-xs text-slate-300 leading-relaxed font-mono">
                <span className="text-cyan-400 font-bold">Execution Plan:</span> Natural language prompt converted into microservice boundaries, 4 supervisor-worker agents, automated evaluation harnesses, and full CI/CD deployment pipelines.
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={handleDeployBlueprint}
                  className="btn-glow text-xs py-2 px-4 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  Deploy This Blueprint With Futurematics &rarr;
                </button>
                <button
                  onClick={handleCopy}
                  className="btn-glass text-xs py-2 px-4 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? '✓ Blueprint Copied!' : '📋 Copy Technical Spec'}
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
