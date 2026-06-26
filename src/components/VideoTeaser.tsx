'use client';

import { CONTENT } from '@/lib/content';
import { PlayIcon } from '@/lib/icons';

export default function VideoTeaser() {
  const { duration, cta } = CONTENT.videoTeaser;
  return (
    <section className="py-32 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gridlines-dark pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <span className="absolute top-6 right-8 text-[10px] font-mono text-[#a7a7a7] tracking-wider">{duration}</span>
        <button className="group relative w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center hover:border-white/60 hover:bg-white/5 transition-all duration-300" aria-label={cta}>
          <PlayIcon className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
        </button>
        <a href="#" className="mt-6 inline-flex items-center gap-2 text-sm text-[#a7a7a7] hover:text-white transition-colors duration-200 border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-md">
          <PlayIcon className="w-4 h-4" />
          {cta}
        </a>
      </div>
    </section>
  );
}
