/**
 * Futurematics Pvt. Ltd. - Centralized Application Data
 * Official Corporate Data & AI Engineering Specifications
 */

export const contactInfo = {
  companyName: "Futurematics Pvt. Ltd.",
  tagline: "We build quality and trust",
  establishedYear: 2013,
  address: "905/59 Future Towers, Amanora Park Town, Hadapsar, Pune - 411028, Maharashtra, India",
  phone: "+91 84468 86884",
  email: "info@futurematics.com",
  hours: "Mon - Sat: 09:00 - 21:00 IST",
  registration: "Registered Private Limited Company in Pune, Maharashtra, India (Inc. February 2013)"
};

export const foundersData = [
  {
    id: "sajad-bhat",
    name: "Sajad Bhat",
    initials: "SB",
    title: "Director & Co-Founder",
    badge: "Frontier AI Strategy & Vibe Systems Architecture",
    description: "Spearheading Futurematics’ frontier strategy in Vibe Coding, prompt-driven architecture, and autonomous multi-agent networks. Sajad leads our innovation initiatives, bridging high-level visionary concepts with deterministic full-stack AI execution — delivering production systems with 10x developer velocity and uncompromising technical rigor.",
    accent: "cyan"
  },
  {
    id: "ghulam-nabi-wani",
    name: "Ghulam Nabi Wani",
    initials: "GW",
    title: "Director & Co-Founder",
    badge: "Operations, Governance & Quality Engineering",
    description: "Directing corporate governance, client partnerships, and global delivery standards. Ghulam embodies the company’s foundational ethos — \"We build quality and trust\" — stewarding enterprise quality assurance, data privacy frameworks, and sovereign client IP ownership across more than a decade of technology leadership.",
    accent: "purple"
  }
];

export const terminalPresets = {
  agent_swarm: {
    title: 'langgraph_swarm_pipeline.py',
    type: 'LangGraph Autonomous Swarm',
    metrics: { latency: '14ms', throughput: '168 tok/s', activeAgents: '4 Autonomous Nodes' },
    code: `import { StateGraph, END } from "@langchain/langgraph";
import { FuturematicsAgentSupervisor } from "@fm/core-agents";

// 1. Initialize Autonomous Swarm Graph
const workflow = new StateGraph({
  channels: { intent: "string", code: "string", verified: "boolean" }
});

// 2. Define High-Velocity Nodes
workflow.addNode("supervisor", async (state) => {
  return await FuturematicsAgentSupervisor.orchestrate(state.intent);
});

workflow.addNode("vibeCoder", async (state) => {
  return await DeepSeekV3Engine.generateFullStackApp({
    spec: state.blueprint,
    safetyGuardrails: true
  });
});

workflow.addNode("evaluator", async (state) => {
  return await VerificationAgent.runUnitTests(state.code);
});

// 3. Connect Multi-Agent Edges
workflow.addEdge("supervisor", "vibeCoder");
workflow.addEdge("vibeCoder", "evaluator");
workflow.addConditionalEdges("evaluator", (state) => 
  state.verified ? END : "vibeCoder"
);

export const agentPipeline = workflow.compile();
console.log("⚡ Futurematics Swarm Online. 0% Hallucination Guard Active.");`
  },
  rag_pipeline: {
    title: 'enterprise_hybrid_rag.ts',
    type: 'Hybrid Vector + BM25 RAG',
    metrics: { latency: '22ms', throughput: '194 tok/s', activeAgents: 'Milvus + Cross-Encoder' },
    code: `import { HybridRetriever } from "@fm/rag-core";
import { CrossEncoderReranker } from "@fm/rerank";

// Enterprise Sovereign Knowledge Ingestion
const retriever = new HybridRetriever({
  denseIndex: "qdrant://secure-vpc.futurematics.internal",
  sparseIndex: "bm25-reciprocal-rank-fusion",
  topK: 25,
  embeddings: "text-embedding-3-large-3072"
});

export async function queryEnterpriseIntelligence(userPrompt: string) {
  // 1. Sub-millisecond dense + lexical retrieval
  const candidates = await retriever.search(userPrompt);
  
  // 2. High-precision Neural Reranking
  const rankedDocs = await CrossEncoderReranker.rerank({
    query: userPrompt,
    documents: candidates,
    topN: 5,
    minRelevanceScore: 0.89
  });

  // 3. Hallucination-Shielded LLM Streaming
  return await FuturematicsLLM.streamWithCitations({
    context: rankedDocs,
    prompt: userPrompt,
    strictSovereignGuardrails: true
  });
}`
  },
  fullstack_ai: {
    title: 'realtime_generative_ui.tsx',
    type: 'Full-Stack Streaming AI App',
    metrics: { latency: '9ms TTFT', throughput: '210 tok/s', activeAgents: 'Next.js 15 + FastAPI' },
    code: `import React, { useOptimistic } from "react";
import { useGenerativeStream } from "@fm/react-ai-hooks";

export default function AutonomousDashboard() {
  const { stream, status, renderDynamicComponent } = useGenerativeStream({
    endpoint: "/api/v1/vibe/generate-ui",
    enableWebSockets: true,
    protocol: "sse-chunked"
  });

  return (
    <div className="fm-cyber-card p-6 bg-slate-950 border border-cyan-500/30">
      <header className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white">AI Real-Time Command Mesh</h2>
        <span className="badge-live">TTFT: 9ms</span>
      </header>

      {/* Dynamic Generative Widget Streamed Live */}
      <div className="dynamic-viewport">
        {renderDynamicComponent(stream.payload)}
      </div>
    </div>
  );
}`
  },
  finetune_lora: {
    title: 'vllm_lora_inference.py',
    type: 'Sovereign LLM Fine-Tuning & vLLM',
    metrics: { latency: '11ms', throughput: '280 tok/s', activeAgents: 'DeepSeek / Llama 3 FP8' },
    code: `from vllm import LLM, SamplingParams
from vllm.lora.request import LoRARequest

# Futurematics Private Sovereign Cluster Serving
llm = LLM(
    model="meta-llama/Meta-Llama-3.1-70B-Instruct",
    enable_lora=True,
    max_loras=8,
    quantization="fp8",
    gpu_memory_utilization=0.92,
    tensor_parallel_size=4
)

lora_adapter = LoRARequest(
    "futurematics_finance_adapter",
    1,
    "/models/adapters/futurematics-private-v4"
)

sampling_params = SamplingParams(
    temperature=0.2,
    top_p=0.95,
    max_tokens=4096
)

print("⚡ Model Served with FP8 Inference. Cloud GPU costs reduced by 62%.")`
  }
};

export const architectureData = {
  agents: {
    title: "Autonomous Multi-Agent Swarm Topology",
    tagline: "Hierarchical Supervisor-Worker Architecture for Complex Multi-Step Reasoning",
    nodes: [
      { name: "Executive Supervisor", role: "Goal decomposition, routing, and dynamic plan adjustment", icon: "🧠", color: "border-cyan-500/40" },
      { name: "Vibe Code Synthesizer", role: "Generates tested full-stack code, microservices & DB schemas", icon: "⚡", color: "border-purple-500/40" },
      { name: "Deterministic Tool Runner", role: "Executes SQL, REST APIs, Web Crawlers in isolated sandboxes", icon: "⚙️", color: "border-emerald-500/40" },
      { name: "Adversarial QA Critic", role: "Validates security vulnerabilities, linting & logic soundness", icon: "🛡️", color: "border-blue-500/40" }
    ],
    features: [
      "Zero infinite loops: Guaranteed DAG convergence & state rollback",
      "Persistent memory: Long-term Episodic & Working memory via Vector DB",
      "Human-in-the-Loop escalation when confidence is below 98%",
      "Engineered with LangGraph, CrewAI & AutoGen Enterprise"
    ],
    throughput: "Sub-20ms Inter-Agent Communication"
  },
  rag: {
    title: "Enterprise Sovereign RAG & Vector Engine",
    tagline: "Dense Semantic Embeddings + Sparse BM25 + Neural Cross-Encoder Rerank",
    nodes: [
      { name: "Multimodal Document Ingest", role: "Parses PDFs, tables, charts, OCR, audio & database records", icon: "📄", color: "border-cyan-500/40" },
      { name: "Hybrid Reciprocal Rank", role: "Combines dense vector search with sparse keyword indexing", icon: "🔍", color: "border-purple-500/40" },
      { name: "Cross-Encoder Reranker", role: "Re-scores top 50 passages down to the 5 highest-fidelity chunks", icon: "🎯", color: "border-emerald-500/40" },
      { name: "Hallucination Firewall", role: "Strict grounding verification preventing non-cited assertions", icon: "🔒", color: "border-blue-500/40" }
    ],
    features: [
      "Sub-25ms hybrid retrieval across 50M+ document vectors",
      "Exact source citation with page, paragraph, and character offsets",
      "Multi-tenant data isolation with automated RBAC security",
      "Built with Milvus, Qdrant, Pinecone & Cohere Rerank"
    ],
    throughput: "99.8% Context Citation Precision"
  },
  finetune: {
    title: "Private Sovereign LLMs & vLLM Cluster",
    tagline: "Fine-Tuning on Proprietary IP with On-Premise / VPC High-Speed Inference",
    nodes: [
      { name: "Synthetic Dataset Engine", role: "Curates, cleans, and de-identifies domain-specific training corpus", icon: "🧪", color: "border-cyan-500/40" },
      { name: "LoRA / QLoRA Training", role: "Efficient parameter adaptation on H100 / A100 GPU clusters", icon: "⚙️", color: "border-purple-500/40" },
      { name: "FP8 Quantization", role: "62% memory reduction with zero discernible loss in accuracy", icon: "📦", color: "border-emerald-500/40" },
      { name: "vLLM Inference Server", role: "PagedAttention & continuous batching serving 250+ tok/s", icon: "🚀", color: "border-blue-500/40" }
    ],
    features: [
      "Complete client ownership of all model adapter weights & checkpoints",
      "Zero telemetry: Runs inside your private AWS/Azure/GCP VPC or Bare Metal",
      "Continuous DPO (Direct Preference Optimization) based on user telemetry",
      "Support for Llama 3.3, DeepSeek R1/V3, Mistral Large, Qwen 2.5"
    ],
    throughput: "Up to 320 Tokens/Second Inference"
  },
  fullstack: {
    title: "Full-Stack Generative AI Reactive Architecture",
    tagline: "Streaming Next.js 15, FastAPI, WebSockets & Reactive Generative UI",
    nodes: [
      { name: "Next.js Edge Frontend", role: "Micro-frontends with optimistic UI, streaming SSR, & voice input", icon: "💻", color: "border-cyan-500/40" },
      { name: "Event Stream Gateway", role: "Bi-directional WebSockets and Server-Sent Events (SSE)", icon: "📡", color: "border-purple-500/40" },
      { name: "High-Throughput FastAPI", role: "Async Python / Go workers managing parallel token pipelines", icon: "⚡", color: "border-emerald-500/40" },
      { name: "Observability & Cache", role: "Semantic response caching (Redis) reducing API costs by 45%", icon: "📊", color: "border-blue-500/40" }
    ],
    features: [
      "Time To First Token (TTFT) under 15 milliseconds globally",
      "Generative UI components rendered dynamically in real-time",
      "Native support for bi-directional audio, vision, and canvas drawing",
      "Modern Tailwind CSS, TypeScript, Docker & Kubernetes orchestrated"
    ],
    throughput: "Sub-15ms TTFT Global Edge Delivery"
  }
};

export const caseStudiesData = [
  {
    id: 'finvibe',
    category: 'rag_llm',
    title: 'FinVibe Intelligence Engine',
    client: 'Global Quantitative Hedge Fund',
    metric: '82% Faster Research • 1.2M Filings Indexed',
    desc: 'Automated multi-agent financial research system that ingests SEC 10-K/Q filings, conference call transcripts, and live market feeds to produce verified investment memorandums in seconds.',
    stack: ['DeepSeek R1', 'Milvus', 'LangGraph', 'FastAPI', 'Next.js'],
    details: 'Achieved sub-second vector retrieval with cross-encoder reranking. Integrated deterministic math guardrails so numeric models are checked with Python interpreters rather than raw LLM generation.'
  },
  {
    id: 'medscribe',
    category: 'rag_llm',
    title: 'MedScribe Sovereign AI',
    client: 'Multi-Hospital Healthcare Network',
    metric: '99.8% Medical Terminology Precision • HIPAA Compliant',
    desc: 'On-premise clinical reasoning and charting assistant that generates structured EHR encounter notes from ambient physician-patient conversations with zero third-party cloud data leakage.',
    stack: ['Llama 3.3 Med-LoRA', 'vLLM', 'Qdrant VPC', 'WebRTC Audio'],
    details: 'Deployed on private bare-metal NVIDIA H100 servers inside the client’s private cloud. Reduced doctor administrative documentation burden from 2.5 hours per day to 18 minutes.'
  },
  {
    id: 'hyperflow',
    category: 'agents',
    title: 'HyperFlow Enterprise Agent Swarm',
    client: 'Supply Chain & Logistics Conglomerate',
    metric: '14 Manual Steps Replaced • 4.2x Faster Procurement',
    desc: 'Autonomous multi-agent cluster orchestrating enterprise procurement, invoice cross-validation against SAP ERP, supplier negotiations, and discrepancy flagging.',
    stack: ['CrewAI', 'LangGraph', 'SAP REST API', 'Redis Memory'],
    details: 'Implemented hierarchical human-in-the-loop review for transactions over $100k, while handling 88% of standard procurement orders fully autonomously with full audit logs.'
  },
  {
    id: 'synthetix',
    category: 'vibe_mvp',
    title: 'Synthetix Vibe-Coded UI Suite',
    client: 'Series-A FinTech Startup',
    metric: 'Idea to Production in 9 Days • 10x Velocity',
    desc: 'From architectural sketches to a live interactive trading analytics platform in under two weeks using Futurematics’ proprietary vibe-coding pipeline.',
    stack: ['React', 'Tailwind CSS', 'Claude 3.5 Sonnet', 'Node.js', 'PostgreSQL'],
    details: 'Zero legacy debt. Complete automated unit test suite generated in parallel with feature code. Scaled seamlessly to 40,000 active beta users without a single downtime incident.'
  },
  {
    id: 'omnistream',
    category: 'fullstack_app',
    title: 'OmniStream Multimodal Real-Time Assistant',
    client: 'Tier-1 Telecom Provider',
    metric: 'Sub-280ms Voice Latency • 100k Calls/Day',
    desc: 'Bidirectional full-duplex voice and screen understanding AI agent that resolves complex technical support issues with automated visual step-by-step guidance.',
    stack: ['OpenAI Realtime API', 'WebSockets', 'Next.js 15', 'Triton Server'],
    details: 'Handles interruptions naturally with sub-300ms latency. Provides live interactive diagram streaming during the call so users see where to click on their router hardware.'
  }
];

export const faqData = [
  {
    question: 'What is "Vibe Coding" and how does Futurematics apply it to enterprise projects?',
    answer: 'Vibe Coding is a high-velocity development philosophy where engineers interact with AI at the intent and architecture layer. Instead of writing boilerplate code line-by-line, we orchestrate multi-agent synthesis loops, generating complete systems from declarative specifications. At Futurematics, we pair vibe velocity with deterministic unit test generation, type checking, and red-team safety verification to produce software that is 10x faster to market while remaining rock-solid.'
  },
  {
    question: 'Do our clients retain 100% intellectual property and model weights?',
    answer: 'Yes, absolutely. Futurematics Pvt Ltd operates on a complete IP transfer basis. All code repositories, fine-tuned adapter weights (LoRA/QLoRA), custom synthetic datasets, vector embeddings, and documentation belong exclusively to your enterprise upon project completion. We do not retain or pool client data.'
  },
  {
    question: 'Can our AI models run completely within our private VPC or on-premise GPUs?',
    answer: 'Yes. We specialize in sovereign, zero-telemetry deployments using open-weight foundation models (such as DeepSeek R1/V3, Llama 3.3, and Mistral). We configure dedicated vLLM / Triton inference clusters inside your AWS, Azure, GCP VPC or bare-metal GPU machines, ensuring zero external API calls and absolute compliance with HIPAA, SOC2, and GDPR.'
  },
  {
    question: 'How fast can Futurematics build and deploy our MVP?',
    answer: 'Depending on scope, our rapid Vibe Coding sprints deliver functional, interactive AI prototypes in as little as 72 hours to 2 weeks. Comprehensive enterprise agent swarms and hybrid RAG systems typically take 3 to 6 weeks from initial architecture specification to production cloud deployment.'
  },
  {
    question: 'What technology stacks and agent frameworks do you utilize?',
    answer: 'Our core stack includes Python, FastAPI, TypeScript, Next.js 15, React, and Tailwind CSS. For AI orchestration, we use LangGraph, CrewAI, AutoGen, and LlamaIndex. For vector intelligence and inference, we deploy Milvus, Qdrant, Pinecone, vLLM, TensorRT-LLM, and Hugging Face pipelines with Docker and Kubernetes.'
  }
];
