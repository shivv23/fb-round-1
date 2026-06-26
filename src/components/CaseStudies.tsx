'use client';

import { CASE_STUDIES_DATA } from '@/lib/constants';
import { useReveal } from './primitives';

const label = { __html: '/// CASE STUDIES' };

export default function CaseStudies() {
  const { ref, visible } = useReveal(0.1);
  return (
    <section id="case-studies" className="py-24 bg-[#f7f7f6] relative overflow-hidden">
      <div className="absolute inset-0 bg-gridlines-light pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label section-label-light" dangerouslySetInnerHTML={label} />
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-16">Proven neural solutions</h2>
          <div className="space-y-0">
            {CASE_STUDIES_DATA.map((cs, i) => (
              <div key={i} className="group flex items-center gap-6 py-6 border-b border-black/[0.04] last:border-b-0 cursor-default">
                <div className="hidden md:block w-24 h-16 rounded-sm bg-gradient-to-br flex-shrink-0" style={{ backgroundImage: `linear-gradient(135deg, ${cs.gradient.replace('from-', '').split(' ')[0]}, ${cs.gradient.replace('to-', '').split(' ')[1]})` }} />
                <div className="w-16 flex-shrink-0 text-xs font-mono text-[#a7a7a7]">{cs.date}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-[#0a0a0a] group-hover:text-[#114c5a] transition-colors duration-200 mb-1">{cs.title}</h3>
                  <p className="text-xs text-[#6b6b6b] leading-relaxed line-clamp-2">{cs.description}</p>
                </div>
                <svg className="w-5 h-5 text-[#a7a7a7] flex-shrink-0 group-hover:text-[#0a0a0a] transition-colors duration-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
