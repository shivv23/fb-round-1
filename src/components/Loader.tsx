'use client';

import { useState, useEffect, useRef } from 'react';

export default function Loader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFading(true);
      setTimeout(() => setVisible(false), 300);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-bg-dark transition-opacity duration-300 ${fading ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-16 h-16">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-[2px] border-teal/10" />
          <div className="absolute inset-0 rounded-full border-[2px] border-transparent border-t-gold animate-loader" style={{ animationDuration: '0.8s' }} />
          <div className="absolute inset-[3px] rounded-full border-[2px] border-transparent border-b-teal animate-loader" style={{ animationDirection: 'reverse', animationDuration: '0.6s' }} />
          {/* Pulse ring */}
          <div className="absolute inset-[-8px] rounded-full border border-gold/10 animate-pulse-glow" style={{ animationDuration: '1.5s' }} />
          {/* Logo center */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img src="/svgs/logo.svg" alt="" className="w-6 h-6 text-gold" aria-hidden="true" />
          </div>
        </div>
        <div className="flex items-center gap-1 font-mono text-xs text-text-secondary tracking-widest uppercase">
          <span>Loading</span>
          <span className="animate-pulse" style={{ animationDuration: '1.2s' }}>.</span>
          <span className="animate-pulse" style={{ animationDuration: '1.2s', animationDelay: '0.2s' }}>.</span>
          <span className="animate-pulse" style={{ animationDuration: '1.2s', animationDelay: '0.4s' }}>.</span>
        </div>
      </div>
    </div>
  );
}
