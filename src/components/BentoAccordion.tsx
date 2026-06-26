'use client';

import { useState, useEffect, useRef } from 'react';
import { FEATURES_DATA } from '@/lib/constants';

function BentoCard({
  feature,
  index,
  isActive,
  onHover,
  onLeave,
}: {
  feature: (typeof FEATURES_DATA)[number];
  index: number;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const obsRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    obsRef.current = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obsRef.current?.unobserve(el); } },
      { threshold: 0.2 }
    );
    obsRef.current.observe(el);
    return () => obsRef.current?.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty('--rx', `${-y * 10}deg`);
    el.style.setProperty('--ry', `${x * 10}deg`);
    el.style.setProperty('--sx', `${50 + x * 20}%`);
    el.style.setProperty('--sy', `${50 + y * 20}%`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    el.style.setProperty('--rx', '0deg');
    el.style.setProperty('--ry', '0deg');
    onLeave();
  };

  const rowSpan = index % 3 === 0 ? 'md:row-span-2' : 'md:row-span-1';
  const flexDir = index % 3 === 0 ? 'md:flex-col md:justify-center' : '';

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={onHover}
      className={`p-8 rounded-2xl border cursor-pointer flex flex-col ${flexDir} ${rowSpan} ${
        isActive
          ? 'border-gold/50 bg-white shadow-xl shadow-gold/5'
          : 'border-text-dark/5 bg-white/80 hover:border-teal/20'
      } transition-all duration-200`}
      style={{
        transform: `perspective(800px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))`,
        transition: 'transform 0.1s ease-out, box-shadow 0.2s ease-out, border-color 0.2s ease-out, opacity 0.7s ease-out',
        opacity: visible ? 1 : 0,
        transformOrigin: 'center center',
      }}
      role="button"
      tabIndex={0}
      aria-label={feature.title}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onHover(); }
      }}
    >
      <div className="relative">
        <div
          className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200 pointer-events-none"
          style={{
            background: `radial-gradient(circle at var(--sx, 50%) var(--sy, 50%), rgba(17, 76, 90, 0.08) 0%, transparent 60%)`,
          }}
        />
        <div className={`w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center mb-5 relative ${index % 3 === 0 ? 'mb-5' : ''}`}>
          <img src={`/svgs/${feature.icon}.svg`} alt="" className="w-6 h-6 text-teal" aria-hidden="true" />
        </div>
      </div>
      <h3 className="font-mono text-lg font-bold text-text-dark mb-3">{feature.title}</h3>
      <p className="text-text-dark/60 text-sm leading-relaxed">{feature.description}</p>
    </div>
  );
}

export default function BentoAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia('(max-width: 767px)');
    setIsMobile(mql.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="features" className="py-24 bg-bg-light relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal/30 bg-teal/5 text-xs font-mono text-teal tracking-wider uppercase mb-4">
            Platform Features
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-text-dark mb-4">
            Built for Scale
          </h2>
          <p className="text-text-dark/60 text-lg max-w-2xl mx-auto">
            Everything you need to build powerful data automation pipelines.
          </p>
        </div>

        {isMobile ? (
          <div className="max-w-2xl mx-auto" role="region" aria-label="Features accordion">
            {FEATURES_DATA.map((feature, i) => {
              const isOpen = activeIndex === i;
              return (
                <div key={i} className="border-b border-text-dark/10">
                  <button
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={isOpen}
                    aria-controls={`accordion-panel-${i}`}
                    className="flex items-center justify-between w-full py-5 text-left text-text-dark hover:text-teal transition-colors duration-150"
                  >
                    <span className="font-mono font-semibold text-sm">
                      {String(i + 1).padStart(2, '0')}. {feature.title}
                    </span>
                    <img src="/svgs/chevron-down.svg" alt="" className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                  </button>
                  <div id={`accordion-panel-${i}`} role="region" aria-labelledby={`accordion-btn-${i}`} className={`accordion-panel ${isOpen ? 'open' : ''}`}>
                    <div className="pb-5 text-text-dark/70 text-sm leading-relaxed">
                      <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center mb-3">
                        <img src={`/svgs/${feature.icon}.svg`} alt="" className="w-5 h-5 text-teal" aria-hidden="true" />
                      </div>
                      {feature.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto" role="region" aria-label="Feature grid">
            {FEATURES_DATA.map((feature, i) => (
              <BentoCard
                key={i}
                feature={feature}
                index={i}
                isActive={activeIndex === i}
                onHover={() => setActiveIndex(i)}
                onLeave={() => setActiveIndex(null)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
