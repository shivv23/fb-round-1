'use client';

import { useRef, useState, useEffect } from 'react';
import { useScrollReveal } from './useScrollReveal';

export function useAnimatedCounter(end: number, duration = 2000, suffix = '') {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.3 });
  const [display, setDisplay] = useState('0');
  const startedRef = useRef(false);

  useEffect(() => {
    if (!isVisible || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * end);

      if (end >= 1000) {
        setDisplay(current.toLocaleString('en-US') + suffix);
      } else if (Number.isInteger(end)) {
        setDisplay(current.toLocaleString('en-US') + suffix);
      } else {
        setDisplay(current + suffix);
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }

    requestAnimationFrame(animate);
  }, [isVisible, end, duration, suffix]);

  return [ref, display] as const;
}
