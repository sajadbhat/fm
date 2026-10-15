import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    image: '/assets/slide2.jpg',
    badge: 'Global Headquarters • Pune, India',
    title: 'Welcome to Futurematics Pvt Ltd',
    desc: 'Located at 905/59 Future Towers, Amanora Park Town, Hadapsar, Pune. Engineered on a bedrock of independent software verification, robust testing frameworks, and custom digital product engineering.',
    badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
  },
  {
    image: '/assets/slide1.jpg',
    badge: 'Decade of Enterprise Solutions',
    title: 'Enterprise Technologies & Cloud Systems',
    desc: 'From Oracle E-Business Suite and cloud computing to modern microservices — bridging mission-critical reliability with next-generation AI automation.',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40'
  },
  {
    image: '/assets/slide3.jpg',
    badge: 'Next-Gen Frontier',
    title: 'Pioneering Vibe Code & Autonomous Swarms',
    desc: 'Empowering founders and global enterprises to synthesize full-stack AI applications, domain-adapted LLMs, and self-healing agent pipelines at 10x velocity.',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
  }
];

export default function HeritageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4500);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section id="heritage" className="py-20 relative bg-[#070b18] border-b border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold mb-2">
              <span className="live-beacon"></span>
              <span>ESTABLISHED 2013 • PUNE, INDIA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Over a Decade of Engineering Excellence: <br />
              <span className="gradient-text">"We Build Quality and Trust"</span>
            </h2>
          </div>
          <p className="text-slate-300 text-xs sm:text-sm max-w-md leading-relaxed">
            From enterprise software development, testing consulting, and Oracle practices to pioneering autonomous AI agents and vibe-coding platforms.
          </p>
        </div>

        {/* Interactive Heritage Slider */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.7)] h-[360px] sm:h-[440px] md:h-[480px]"
        >
          {slides.map((s, idx) => (
            <div
              key={idx}
              className={`heritage-slide ${idx === currentSlide ? 'active' : ''}`}
            >
              <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
              <div className="heritage-overlay absolute inset-0 flex flex-col justify-end p-6 sm:p-10 md:p-12">
                <div className="max-w-2xl space-y-2">
                  <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider border ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all z-20 backdrop-blur-md cursor-pointer"
            aria-label="Previous slide"
          >
            &#10094;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-950/70 border border-white/20 text-white flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all z-20 backdrop-blur-md cursor-pointer"
            aria-label="Next slide"
          >
            &#10095;
          </button>

          {/* Slider Dots */}
          <div className="absolute bottom-4 right-6 sm:right-10 flex items-center gap-2 z-20">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === currentSlide
                    ? 'w-8 bg-cyan-400'
                    : 'w-2.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
