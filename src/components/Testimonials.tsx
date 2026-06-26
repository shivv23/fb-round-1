'use client';

import { QUOTES_DATA } from '@/lib/constants';
import { useReveal } from './primitives';

export default function Testimonials() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section id="testimonials" className="py-24 bg-[#f7f7f6] border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label section-label-light">/// TESTIMONIALS</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-12">Trusted by the pioneers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {QUOTES_DATA.map((item, i) => (
              <div key={i} className="relative border border-black/[0.06] rounded-[6px] p-5 bg-white hover:border-black/[0.12] transition-all duration-200">
                <div className="testimonial-rotated">{item.role.split(',')[1]?.trim() || item.role}</div>
                <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2">{item.headline}</h3>
                <div className="flex gap-0.5 mb-3" role="img" aria-label={`${item.stars} out of 5 stars`}>
                  {Array.from({ length: item.stars }).map((_, s) => (
                    <svg key={s} className="w-3 h-3 text-[#a7a7a7]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-[#6b6b6b] leading-relaxed mb-4">&ldquo;{item.comment}&rdquo;</p>
                <div className="text-xs font-mono text-[#a7a7a7]">
                  <span className="text-[#0a0a0a] font-semibold">{item.name}</span> — {item.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
