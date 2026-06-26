'use client';

import { useRef, useEffect, useState } from 'react';
import ParticleBackground from './ParticleBackground';
import { SectionLabel } from './primitives';

function useTypewriter(text: string, speed = 18) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

function DepthLayer({ children, depth = 0, className = '' }: { children: React.ReactNode; depth?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let raf: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const x = ((e.clientX / window.innerWidth) - 0.5) * depth;
        const y = ((e.clientY / window.innerHeight) - 0.5) * depth;
        el!.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(raf); };
  }, [depth]);
  return <div ref={ref} className={`transition-transform duration-200 ease-out ${className}`}>{children}</div>;
}

function FloatingIcon({ src, className, speed = 1 }: { src: string; className: string; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let start = 0;
    let id: number;
    const fn = (t: number) => {
      if (!start) start = t;
      const s = (t - start) * 0.001 * speed;
      if (el) {
        el.style.transform = `translate3d(${Math.sin(s * 0.7) * 30}px, ${Math.cos(s * 0.5) * 20}px, ${Math.sin(s * 0.3) * 20}px) rotate(${Math.sin(s * 0.2) * 10}deg) scale(${1 + Math.sin(s * 0.4) * 0.05})`;
      }
      id = requestAnimationFrame(fn);
    };
    id = requestAnimationFrame(fn);
    return () => cancelAnimationFrame(id);
  }, [speed]);
  return <div ref={ref} className={`absolute pointer-events-none ${className}`} aria-hidden="true"><img src={src} alt="" className="w-full h-full" /></div>;
}

const LOGOS = ['AcmeCorp', 'TechVista', 'DataSphere', 'AILabs', 'CloudNexus', 'FutureStack'];

export default function Hero() {
  const tagline = useTypewriter('Deploy custom AI agents that analyze, automate, and optimize your enterprise workflows in real time.', 16);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-dark" style={{ perspective: '1500px' }}>
      <ParticleBackground count={80} />

      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="tech-block w-64 h-64 top-[15%] left-[5%] opacity-[0.04] rotate-12" />
        <div className="tech-block w-48 h-48 bottom-[20%] right-[8%] opacity-[0.03] -rotate-6" />
        <div className="tech-block w-80 h-32 top-[40%] right-[3%] opacity-[0.02] rotate-45" />
        <div className="tech-block w-40 h-40 bottom-[10%] left-[12%] opacity-[0.04] rotate-[30deg]" />
        <div className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03] blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute w-[800px] h-[800px] rounded-full opacity-[0.12] blur-3xl" style={{ background: 'radial-gradient(circle, #ffc801 0%, transparent 60%)', left: '50%', top: '45%', transform: 'translate(-50%, -50%)' }} />
        <div className="absolute w-[500px] h-[500px] rounded-full opacity-[0.06] blur-3xl" style={{ background: 'radial-gradient(circle, #114c5a 0%, transparent 65%)', left: '20%', top: '55%' }} />
        <div className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] blur-3xl" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 65%)', right: '10%', top: '20%' }} />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-1/2 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-gold/5 to-transparent blur-sm" />
      </div>

      <DepthLayer depth={8}>
        <FloatingIcon src="/svgs/arrow-trending-up.svg" className="top-[18%] right-[20%] w-20 h-20 sm:w-28 sm:h-28 opacity-[0.18]" speed={0.7} />
      </DepthLayer>
      <DepthLayer depth={-6}>
        <FloatingIcon src="/svgs/chart-pie.svg" className="bottom-[20%] left-[12%] w-16 h-16 sm:w-24 sm:h-24 opacity-[0.14]" speed={1.1} />
      </DepthLayer>
      <DepthLayer depth={10}>
        <FloatingIcon src="/svgs/cube-16-solid.svg" className="top-[32%] left-[8%] w-12 h-12 sm:w-16 sm:h-16 opacity-[0.1]" speed={0.5} />
      </DepthLayer>
      <DepthLayer depth={-5}>
        <FloatingIcon src="/svgs/arrow-path.svg" className="bottom-[32%] right-[10%] w-14 h-14 sm:w-20 sm:h-20 opacity-[0.1]" speed={0.9} />
      </DepthLayer>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <DepthLayer depth={3}>
          <div className="animate-fade-in-up stagger-1">
            <div className="inline-flex items-center justify-center">
              <SectionLabel>/// NEXT-GEN PLATFORM</SectionLabel>
            </div>
          </div>
        </DepthLayer>

        <DepthLayer depth={-2}>
          <h1 className="animate-fade-in-up stagger-2 font-mono text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 max-w-4xl mx-auto">
            Power your enterprise
            <br />
            <span className="text-gold" style={{ textShadow: '0 0 40px rgba(255,200,1,0.3), 0 0 80px rgba(255,200,1,0.12)' }}>
              with AI
            </span>
          </h1>
        </DepthLayer>

        <DepthLayer depth={2}>
          <p className="animate-fade-in-up stagger-3 text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed min-h-[3.5rem]">
            {tagline}
            <span className="inline-block w-[3px] h-[1.1em] bg-gold ml-0.5 align-text-bottom animate-pulse-glow" />
          </p>
        </DepthLayer>

        <DepthLayer depth={-1}>
          <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#pricing"
              className="group relative inline-flex items-center px-8 py-3.5 text-base font-medium text-black bg-gold rounded-lg overflow-hidden transition-all duration-200 micro-active shadow-lg shadow-gold/20 hover:shadow-gold/40"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M9 3v2M15 3v2M3 9h18M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Build a Workflow</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="#tabbed-panel"
              className="relative inline-flex items-center px-8 py-3.5 text-base font-medium text-white/80 border border-white/15 rounded-lg hover:border-white/40 hover:text-white transition-all duration-200 micro-active group"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              View Demo
            </a>
          </div>
        </DepthLayer>

        <DepthLayer depth={4}>
          <div className="animate-fade-in-up stagger-5 mt-16 flex items-center justify-center gap-8 sm:gap-12 text-text-secondary">
            {[
              { value: '10M+', label: 'Records/sec' },
              { value: '99.9%', label: 'Uptime SLA' },
              { value: '200+', label: 'Integrations' },
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-white group-hover:text-gold transition-colors duration-300">
                  {stat.value}
                </div>
                <div className="text-xs mt-1 text-text-secondary/70 group-hover:text-text-secondary transition-colors duration-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </DepthLayer>

        <DepthLayer depth={2}>
          <div className="animate-fade-in-up stagger-6 mt-20">
            <p className="text-xs font-mono text-text-secondary/50 tracking-[0.2em] uppercase mb-6">Trusted by industry leaders</p>
            <div className="logo-cloud">
              {LOGOS.map((name) => (
                <div key={name} className="logo-placeholder">{name}</div>
              ))}
              <div className="w-px h-6 bg-white/5" aria-hidden="true" />
              <div className="logo-placeholder">+ more</div>
            </div>
          </div>
        </DepthLayer>
      </div>

      <div className="scroll-indicator animate-fade-in" style={{ animationDelay: '2s', animationFillMode: 'both' }}>
        <span className="text-[10px] font-mono text-text-secondary/40 tracking-[0.15em] uppercase">Scroll</span>
        <div className="scroll-indicator-dot" />
      </div>
    </section>
  );
}
