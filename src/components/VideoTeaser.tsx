'use client';

import { useState } from 'react';
import { CONTENT } from '@/lib/content';
import { PlayIcon } from '@/lib/icons';

export default function VideoTeaser() {
  const { duration, cta, videoUrl } = CONTENT.videoTeaser;
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-32 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gridlines-dark pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center px-4">
        <span className="self-end text-[10px] font-mono text-[#a7a7a7] tracking-wider mb-6">{duration}</span>
        <div className="relative w-full max-w-4xl aspect-video rounded-lg overflow-hidden border border-white/[0.08] bg-black/40">
          {playing ? (
            <iframe
              src={`${videoUrl}?autoplay=1`}
              className="absolute inset-0 w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Platform Overview"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 cursor-pointer group" onClick={() => setPlaying(true)}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30" />
              <div className="relative w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/5 transition-all duration-300">
                <PlayIcon className="w-8 h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="relative text-sm text-white/70 group-hover:text-white transition-colors duration-200 font-mono">
                {cta}
              </span>
            </div>
          )}
        </div>
        {!playing && (
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-[#a7a7a7] hover:text-white transition-colors duration-200 border border-white/10 hover:border-white/30 px-5 py-2.5 rounded-md"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <path d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            Open in Drive
          </a>
        )}
      </div>
    </section>
  );
}
