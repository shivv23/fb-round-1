'use client';

import { useRef, useState, useEffect } from 'react';

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState('0');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let endNum = 0;
    let suffix = '';
    if (value.endsWith('M+')) { endNum = 10; suffix = 'M+'; }
    else if (value.endsWith('%')) { endNum = 99.9; suffix = '%'; }
    else if (value.endsWith('K+')) { endNum = 50; suffix = 'K+'; }
    else if (value.endsWith('+')) { endNum = parseInt(value.replace('+', '')); suffix = '+'; }

    const duration = 2000;
    const start = performance.now();

    function fn(now: number) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const current = Math.round(eased * endNum);
      setDisplay(current + suffix);
      if (p < 1) requestAnimationFrame(fn);
    }

    requestAnimationFrame(fn);
  }, [visible, value]);

  return (
    <div ref={ref} className="text-center group">
      <div className={`font-mono text-3xl sm:text-4xl font-bold text-gold mb-2 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {display}
      </div>
      <div className={`text-text-secondary text-sm transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const stats = [
    { value: '10M+', label: 'Records/sec processed' },
    { value: '99.9%', label: 'Platform uptime SLA' },
    { value: '200+', label: 'Native integrations' },
    { value: '50K+', label: 'Active developers' },
  ];

  return (
    <section className="py-20 bg-bg-dark-alt border-y border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-gold rounded-full opacity-[0.03] blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal rounded-full opacity-[0.03] blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <AnimatedStat key={i} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
