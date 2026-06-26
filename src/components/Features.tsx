'use client';

import { useRef, useEffect, useState } from 'react';
import { CONTENT } from '@/lib/content';
import { FeatureIcon } from '@/lib/icons';

function FeatureCard({ title, description, icon, index }: { title: string; description: string; icon: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="feature-card"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="feature-icon">
        <FeatureIcon name={icon} />
      </div>
      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-text-secondary/80 leading-relaxed">{description}</p>
    </div>
  );
}

export default function Features() {
  const headingRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setHeadingVisible(true); obs.unobserve(el); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const { label, headline, headlineAccent, cards } = CONTENT.features;

  return (
    <section className="py-24 bg-bg-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-16">
          <span
            className="inline-block text-xs font-mono text-text-secondary tracking-[0.2em] uppercase mb-4"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
            }}
          >
            {label}
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{
              opacity: headingVisible ? 1 : 0,
              transform: headingVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
              transitionDelay: '0.1s',
            }}
          >
            Enterprise AI, built for <span className="text-gold">{headlineAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((card, i) => (
            <FeatureCard key={card.title} title={card.title} description={card.description} icon={card.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
