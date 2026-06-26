'use client';

import { SITE_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 py-16 relative overflow-hidden">
      <div className="bg-brand-watermark" aria-hidden="true">{SITE_NAME}</div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Newsletter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 text-center">
          <div>
            <div className="text-sm text-white font-semibold mb-1">Stay updated</div>
            <div className="text-xs text-[#a7a7a7]">Get product updates and industry insights.</div>
          </div>
          <div className="flex items-center gap-2">
            <input type="email" name="email" placeholder="Enter your email" className="newsletter-input" aria-label="Email for newsletter" />
            <a href="#" className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-black bg-white rounded-md hover:bg-white/90 transition-all duration-200">
              Subscribe
            </a>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent mb-12" />

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="w-5 h-5 text-gold" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 2L4.5 14h6l-1.5 8L18 10h-6l1.5-8z" />
              </svg>
              <span className="font-mono text-base font-bold text-white">{SITE_NAME}</span>
            </div>
            <p className="text-xs text-[#a7a7a7] leading-relaxed max-w-xs">Next-generation AI-powered data automation platform. Extract, process, and analyze data at scale.</p>
          </div>

          <div>
            <h3 className="font-mono text-xs text-white font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Testimonials', 'FAQ'].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="text-xs text-[#a7a7a7] hover:text-white transition-colors duration-150">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-white font-semibold uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-2">
              {['About', 'Blog', 'Careers', 'Contact'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-[#a7a7a7] hover:text-white transition-colors duration-150">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs text-white font-semibold uppercase tracking-wider mb-4">Policies</h3>
            <ul className="space-y-2">
              {['Privacy', 'Terms', 'Cookies', 'Security'].map((l) => (
                <li key={l}>
                  <a href="#" className="text-xs text-[#a7a7a7] hover:text-white transition-colors duration-150">{l}</a>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-2 mt-6">
              {[{abbr:'X',label:'Twitter'},{abbr:'GH',label:'GitHub'},{abbr:'LI',label:'LinkedIn'}].map((s) => (
                <a key={s.label} href="#" className="w-8 h-8 border border-white/10 rounded-[4px] flex items-center justify-center text-[10px] font-mono text-[#a7a7a7] hover:border-white/30 hover:text-white transition-all duration-150" aria-label={s.label}>
                  <span aria-hidden="true">{s.abbr}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#a7a7a7] text-[10px] font-mono">&copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</p>
          <div className="text-[10px] font-mono text-white/60">v2.1.0 — Production</div>
        </div>
      </div>
    </footer>
  );
}
