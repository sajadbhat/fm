import React from 'react';
import { contactInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#030610] text-slate-400 text-xs relative z-10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="fm-logo-container mb-1 inline-block" title={contactInfo.companyName}>
              <img src="/assets/Full-FM-Logo.png" alt={contactInfo.companyName} className="fm-logo-img" />
            </a>
            <p className="text-xs text-cyan-400 font-mono italic">"{contactInfo.tagline}" — Since {contactInfo.establishedYear}</p>

            <p className="text-slate-300 text-xs max-w-sm leading-relaxed">
              Futurematics Pvt. Ltd. is a premier technology and artificial intelligence company headquartered in Pune, India. With over a decade of bedrock in software development and independent verification, we pioneer the frontier of Vibe Coding, Autonomous LLM Swarms, and Full-Stack Generative Applications.
            </p>

            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-emerald-400">
              <span className="live-beacon"></span>
              <span>Pune Engineering Lab &amp; Inference Clusters Operational</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">AI Solutions</div>
            <ul className="space-y-2">
              <li><a href="#vibe-studio" className="hover:text-cyan-400 transition-colors">Vibe Coding Studio</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Autonomous Multi-Agent Swarms</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Enterprise LLM Fine-Tuning</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Hybrid Vector RAG</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Full-Stack AI Applications</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">vLLM GPU Cost Optimization</a></li>
            </ul>
          </div>

          {/* Column 3: Architectures */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">Heritage &amp; Architecture</div>
            <ul className="space-y-2">
              <li><a href="#heritage" className="hover:text-cyan-400 transition-colors">Pune Innovation Center</a></li>
              <li><a href="#leadership" className="hover:text-cyan-400 transition-colors">Founders &amp; Leadership</a></li>
              <li><a href="#heritage" className="hover:text-cyan-400 transition-colors">Software QA &amp; Testing Heritage</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">LangGraph Multi-Agent DAGs</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">Sovereign VPC Inference</a></li>
              <li><a href="#estimator" className="hover:text-cyan-400 transition-colors">Transparent Scope Blueprint</a></li>
            </ul>
          </div>

          {/* Column 4: Corporate & Connect */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-white font-bold uppercase tracking-wider">Corporate Headquarters</div>
            <ul className="space-y-2 text-slate-300 text-xs">
              <li className="font-bold text-white">{contactInfo.companyName}</li>
              <li>905/59 Future Towers, Amanora Park Town,</li>
              <li>Hadapsar, Pune - 411028, Maharashtra, India</li>
              <li className="pt-1">
                📞 <a href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`} className="text-cyan-400 font-bold hover:underline">{contactInfo.phone}</a>
              </li>
              <li>
                ✉️ <a href={`mailto:${contactInfo.email}`} className="text-slate-300 hover:text-cyan-400">{contactInfo.email}</a>
              </li>
              <li>🕒 {contactInfo.hours}</li>
              <li className="pt-2 flex items-center gap-2">
                <span className="tech-badge cursor-pointer hover:border-cyan-400">GitHub</span>
                <span className="tech-badge cursor-pointer hover:border-cyan-400">LinkedIn</span>
                <span className="tech-badge cursor-pointer hover:border-cyan-400">X / Twitter</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; 2026 {contactInfo.companyName}. All rights reserved. {contactInfo.registration}.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Security &amp; SOC2</a>
            <a href="#" className="hover:text-slate-300 transition-colors">AI Ethics Charter</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
