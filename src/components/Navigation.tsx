'use client';

import { NAV_LINKS, MENU_ITEMS, SITE_NAME } from '@/lib/constants';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0);
      setScrolled(scrollTop > 50);

      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        const el = s as HTMLElement;
        if (scrollTop >= el.offsetTop - 150) current = el.id;
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/70 backdrop-blur-2xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/5">
        <div
          className="h-full bg-gradient-to-r from-teal to-gold transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center gap-2 group" aria-label="NovaAutomate home">
            <svg className="w-6 h-6 text-gold group-hover:text-gold-light transition-colors duration-200" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13.5 2L4.5 14h6l-1.5 8L18 10h-6l1.5-8z" />
            </svg>
            <span className="font-mono text-lg font-bold tracking-tight text-white">{SITE_NAME}</span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'text-gold bg-gold/10'
                      : 'text-text-secondary hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-[1px] left-1/2 -translate-x-1/2 w-4 h-0.5 bg-gold rounded-full" />
                  )}
                </a>
              );
            })}
            <a
              href="#pricing"
              className="ml-4 inline-flex items-center px-5 py-2 text-sm font-medium text-black bg-gold rounded-lg hover:bg-gold-light active:scale-[0.97] transition-all duration-150 ease-out shadow-lg shadow-gold/20"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 text-white hover:text-gold transition-colors duration-150"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      <div
        className={`slide-menu-overlay ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <aside className={`slide-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
        <div className="flex items-center justify-between mb-8">
          <span className="font-mono text-sm text-text-secondary uppercase tracking-widest">Menu</span>
          <button
            className="p-1 text-white/60 hover:text-white transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            type="button"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {MENU_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-lg font-medium py-2.5 px-3 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-all duration-200"
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <div className="mt-auto pt-8 border-t border-white/5">
          <a
            href="#pricing"
            className="block w-full text-center px-5 py-3 text-sm font-medium text-black bg-gold rounded-lg hover:bg-gold-light transition-all duration-150"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </a>
        </div>
      </aside>
    </header>
  );
}
