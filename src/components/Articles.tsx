'use client';

import { ARTICLES_DATA } from '@/lib/constants';
import { useReveal } from './primitives';

export default function Articles() {
  const { ref, visible } = useReveal(0.1);
  const featured = ARTICLES_DATA.find(a => a.featured)!;
  const rest = ARTICLES_DATA.filter(a => !a.featured);

  return (
    <section id="articles" className="py-24 bg-[#f7f7f6] border-t border-black/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''}`}>
          <span className="section-label section-label-light">/// INSIGHTS</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0a0a0a] mb-12">Insights on neural logic</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <div className="border border-black/[0.06] rounded-[6px] p-6 bg-white hover:border-black/[0.12] transition-colors duration-200 cursor-default">
                <div className="flex items-center gap-3 text-xs text-[#a7a7a7] font-mono mb-3">
                  <span>{featured.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#a7a7a7]" />
                  <span>{featured.readTime}</span>
                </div>
                <h3 className="text-lg font-semibold text-[#0a0a0a] mb-2">{featured.title}</h3>
                <p className="text-sm text-[#6b6b6b] leading-relaxed">{featured.description}</p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6 mt-6">
                {rest.slice(0, 2).map((article) => (
                  <div key={article.title} className="border border-black/[0.06] rounded-[6px] p-6 bg-white hover:border-black/[0.12] transition-colors duration-200 cursor-default">
                    <div className="flex items-center gap-3 text-xs text-[#a7a7a7] font-mono mb-3">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-[#a7a7a7]" />
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-[#0a0a0a] mb-2">{article.title}</h3>
                    {article.description && <p className="text-xs text-[#6b6b6b] leading-relaxed">{article.description}</p>}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="text-sm text-[#6b6b6b] font-mono mb-4">Recent</div>
              {rest.slice(2).map((article) => (
                <div key={article.title} className="cursor-default">
                  <div className="text-xs text-[#a7a7a7] font-mono mb-1">{article.date} — {article.readTime}</div>
                  <div className="text-sm text-[#0a0a0a] hover:text-[#114c5a] transition-colors duration-200">{article.title}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
