import React, { useState } from 'react';
import { faqData } from '../data/siteData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-24 border-t border-slate-800/80 bg-grid-pattern relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono font-semibold">
            <span>CLARITY &amp; GOVERNANCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Frequently Asked Questions</h2>
          <p className="text-xs sm:text-sm text-slate-400">Everything you need to know about partnering with Futurematics Pvt Ltd.</p>
        </div>

        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="glass-panel overflow-hidden">
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  <span>{item.question}</span>
                  <span className={`text-cyan-400 text-xl font-mono ml-4 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
                    {isOpen ? '×' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3 animate-fadeIn">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
