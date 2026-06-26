'use client';

import { useState } from 'react';
import { FAQ_DATA } from '@/lib/constants';
import { useReveal } from './primitives';

function FAQItem({ q, a, isOpen, onClick }: { q: string; a: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        {q}
        <span className="faq-toggle" aria-hidden="true" />
      </button>
      <div className="faq-answer" role="region">
        <div className="faq-answer-inner">{a}</div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="faq" className="py-24 bg-[#f7f7f6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="section-label section-label-light">/// FAQ</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-4">Common inquiries</h2>
              <p className="text-sm text-[#6b6b6b] mb-8 leading-relaxed">Everything you need to know about NovaAutomate. Can&apos;t find what you&apos;re looking for? Reach out.</p>
              <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-[#0a0a0a] rounded-md hover:bg-[#0a0a0a]/90 transition-colors duration-200">
                Contact us
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div>
              {FAQ_DATA.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} isOpen={openIndex === i} onClick={() => setOpenIndex(openIndex === i ? null : i)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
