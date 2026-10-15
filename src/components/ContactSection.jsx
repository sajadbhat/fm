import React, { useState } from 'react';
import { contactInfo } from '../data/siteData';

export default function ContactSection({ formData, setFormData }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successTicket, setSuccessTicket] = useState(null);

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const ticketId = 'FM-2026-AI-' + Math.floor(100 + Math.random() * 900);
      setSuccessTicket(ticketId);
      setFormData({
        contactName: '',
        contactEmail: '',
        contactCompany: '',
        contactService: 'ai_agents',
        contactDesc: '',
        contactNDA: false
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/90 border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <span className="live-beacon"></span>
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Connect with <span className="gradient-text">Futurematics Pvt Ltd</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Reach out directly to our Pune headquarters or schedule an AI architecture consultation with our principal team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Official Contact & Headquarters Info */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest block mb-1">Corporate Headquarters</span>
              <h3 className="text-xl font-bold text-white">{contactInfo.companyName}</h3>
              <p className="text-xs text-cyan-400/90 font-mono italic mt-0.5">"{contactInfo.tagline}" • Est. {contactInfo.establishedYear}</p>
            </div>

            {/* Direct Phone */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-lg flex-shrink-0">
                📞
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Have a question? Call Us Now</div>
                <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-base font-bold text-white hover:text-cyan-400 transition-colors font-mono">
                  {contactInfo.phone}
                </a>
                <div className="text-[11px] text-slate-400 mt-0.5">Direct line to technical advisory squad</div>
              </div>
            </div>

            {/* Direct Email */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-lg flex-shrink-0">
                ✉️
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Drop Us an Email</div>
                <a href={`mailto:${contactInfo.email}`} className="text-sm font-bold text-white hover:text-purple-300 transition-colors font-mono">
                  {contactInfo.email}
                </a>
                <div className="text-[11px] text-slate-400 mt-0.5">Response within 24 hours guaranteed</div>
              </div>
            </div>

            {/* Physical Address */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg flex-shrink-0">
                📍
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Registered Office</div>
                <div className="text-xs font-semibold text-white mt-1 leading-relaxed">
                  {contactInfo.address}
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center text-lg flex-shrink-0">
                🕒
              </div>
              <div>
                <div className="text-[11px] font-mono text-slate-400 uppercase">Working Hours</div>
                <div className="text-xs font-bold text-white mt-0.5 font-mono">{contactInfo.hours}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Global support coverage across US, UK &amp; APAC timezones</div>
              </div>
            </div>

          </div>

          {/* Right Column: Consultation Form */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 border-cyan-500/30 relative shadow-2xl">
            
            <h3 className="text-lg font-bold text-white mb-2">Schedule an AI Architecture Review</h3>
            <p className="text-xs text-slate-400 mb-6">Fill out your project requirements below, or prefill via our Scope Estimator.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contactName" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">Your Name *</label>
                  <input
                    type="text"
                    id="contactName"
                    required
                    value={formData.contactName || ''}
                    onChange={handleChange}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">Work Email *</label>
                  <input
                    type="email"
                    id="contactEmail"
                    required
                    value={formData.contactEmail || ''}
                    onChange={handleChange}
                    placeholder="alex@company.com"
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contactCompany" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">Company / Organization *</label>
                  <input
                    type="text"
                    id="contactCompany"
                    required
                    value={formData.contactCompany || ''}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corp / Stealth Startup"
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="contactService" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">Service of Interest *</label>
                  <select
                    id="contactService"
                    value={formData.contactService || 'ai_agents'}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-mono"
                  >
                    <option value="vibe_mvp">Vibe Code Rapid MVP (72h - 2wks)</option>
                    <option value="ai_agents">Autonomous AI Multi-Agent Swarms</option>
                    <option value="llm_rag">Enterprise LLM Fine-Tuning &amp; Hybrid RAG</option>
                    <option value="fullstack_app">Full-Stack Generative AI Application</option>
                    <option value="infra_vllm">vLLM Inference &amp; GPU Cost Optimization</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="contactDesc" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-1.5">Project Vision &amp; Requirements *</label>
                <textarea
                  id="contactDesc"
                  rows={4}
                  required
                  value={formData.contactDesc || ''}
                  onChange={handleChange}
                  placeholder="Describe what you want to build, existing tech stack, target timeline, or any specific models you plan to utilize..."
                  className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3.5 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 font-sans"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="contactNDA"
                  checked={formData.contactNDA || false}
                  onChange={handleChange}
                  className="w-4 h-4 rounded bg-slate-900 border-slate-700 text-cyan-400 focus:ring-0"
                />
                <label htmlFor="contactNDA" className="text-xs text-slate-300">
                  Please provide a mutual Non-Disclosure Agreement (NDA) before our technical call.
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-glow text-sm py-3.5 px-6 font-bold tracking-wide cursor-pointer"
              >
                {isSubmitting ? 'Initializing AI Consultation Pipeline...' : 'Submit Project Inquiry to Futurematics →'}
              </button>

            </form>

          </div>

        </div>

      </div>

      {/* Success Modal */}
      {successTicket && (
        <div
          onClick={() => setSuccessTicket(null)}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel max-w-md w-full p-6 sm:p-8 bg-[#070c18] border border-cyan-400/50 text-center relative shadow-2xl animate-fadeIn"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center text-2xl mb-4">
              ✓
            </div>
            <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest">Inquiry Received</div>
            <h3 className="text-2xl font-bold text-white mt-1">Consultation Scheduled</h3>
            <p className="text-xs text-slate-300 mt-2 leading-relaxed">
              Thank you for reaching out to <strong>Futurematics Pvt Ltd</strong>. Our AI engineering squad has queued your project specifications.
            </p>

            <div className="my-4 p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs font-mono text-slate-300">
              Tracking Ticket ID: <span className="text-cyan-400 font-bold">{successTicket}</span>
            </div>

            <p className="text-[11px] text-slate-400">
              A calendar invite and preliminary technical review will be dispatched to your work email shortly.
            </p>

            <button
              onClick={() => setSuccessTicket(null)}
              className="mt-6 w-full btn-glow text-xs py-2.5 cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
