'use client';

import { useRef, useEffect, useState } from 'react';

export function Section({ children, className = '', dark = true, id }: { children: React.ReactNode; className?: string; dark?: boolean; id?: string }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${dark ? 'bg-bg-dark text-white' : 'bg-[#f7f7f6] text-[#0a0a0a]'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className={`section-label ${light ? 'section-label-light' : ''}`}>
      {children}
    </div>
  );
}

export function SectionHeader({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight mb-6 ${className}`}>{children}</h2>;
}

export function Button({ children, href = '#', variant = 'outline', className = '' }: { children: React.ReactNode; href?: string; variant?: 'outline' | 'primary' | 'ghost'; className?: string }) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-md transition-all duration-200 micro-active focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const variants = {
    outline: 'border border-white/20 text-white hover:bg-white hover:text-black focus-visible:ring-white',
    primary: 'bg-white text-black hover:bg-white/90 border border-transparent focus-visible:ring-white',
    ghost: 'text-a7a7a7 hover:text-white border border-transparent focus-visible:ring-white',
  };
  const darkAlt = {
    outline: 'border border-black/15 text-black hover:bg-black hover:text-white focus-visible:ring-black',
    primary: 'bg-black text-white hover:bg-black/90 focus-visible:ring-black',
    ghost: 'text-6b6b6b hover:text-black',
  };
  return (
    <a href={href} className={`${base} ${variant === 'outline' ? 'border border-white/20 text-white hover:bg-white hover:text-black' : variant === 'primary' ? 'bg-white text-black hover:bg-white/90' : 'text-[#a7a7a7] hover:text-white'} ${className}`}>
      {children}
    </a>
  );
}

export function Divider({ className = '' }: { className?: string }) {
  return <div className={`h-px w-full ${className}`} style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />;
}

export function Panel({ children, className = '', light = false }: { children: React.ReactNode; className?: string; light?: boolean }) {
  return (
    <div className={`panel ${light ? 'panel-light' : ''} ${className}`}>
      {children}
    </div>
  );
}

export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}
