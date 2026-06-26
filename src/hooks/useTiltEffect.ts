'use client';

import { useRef, useCallback, type RefObject } from 'react';

interface TiltValues {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
}

export function useTiltEffect<T extends HTMLElement = HTMLDivElement>(
  maxTilt = 8
): [RefObject<T | null>, (e: React.MouseEvent<T>) => void, () => void] {
  const ref = useRef<T | null>(null);
  const rafRef = useRef(0);
  const prevRef = useRef<TiltValues>({ rotateX: 0, rotateY: 0, glowX: 0, glowY: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<T>) => {
      const el = ref.current;
      if (!el) return;

      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotateX = (-mouseY / (rect.height / 2)) * maxTilt;
        const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
        const glowX = (mouseX / (rect.width / 2)) * 50;
        const glowY = (mouseY / (rect.height / 2)) * 50;

        prevRef.current = { rotateX, rotateY, glowX, glowY };

        el.style.setProperty('--rotate-x', `${rotateX}deg`);
        el.style.setProperty('--rotate-y', `${rotateY}deg`);
        el.style.setProperty('--glow-x', `${50 + glowX}%`);
        el.style.setProperty('--glow-y', `${50 + glowY}%`);
      });
    },
    [maxTilt]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.style.setProperty('--rotate-x', '0deg');
    el.style.setProperty('--rotate-y', '0deg');
    el.style.setProperty('--glow-x', '50%');
    el.style.setProperty('--glow-y', '50%');
  }, []);

  return [ref, handleMouseMove, handleMouseLeave];
}
