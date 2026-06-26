'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  size: number;
  opacity: number;
  phase: number;
  hue: number;
}

export default function ParticleBackground({ count = 60 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let particles: Particle[] = [];
    let mouseX = -1000;
    let mouseY = -1000;
    let time = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    function init() {
      if (!canvas) return;
      const total = Math.min(count, Math.floor((canvas.width * canvas.height) / 15000));
      particles = Array.from({ length: total }, () => ({
        x: Math.random() * canvas!.width,
        y: Math.random() * canvas!.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.1,
        phase: Math.random() * Math.PI * 2,
        hue: Math.random() > 0.5 ? 42 : 187,
      }));
    }

    function draw() {
      if (!canvas || !ctx) return;
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        p.x += p.vx + Math.sin(time * 0.8 + p.phase) * 0.15;
        p.y += p.vy + Math.cos(time * 0.6 + p.phase) * 0.15;

        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        if (p.y > canvas.height + 10) p.y = -10;

        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x -= (dx / dist) * force * 0.5;
          p.y -= (dy / dist) * force * 0.5;
        }

        const pulse = 0.5 + Math.sin(time * 1.5 + p.phase) * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size + pulse * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, ${p.hue === 42 ? 60 : 50}%, ${p.opacity * pulse})`;
        ctx.fill();
      }

      ctx.shadowBlur = 0;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.06;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `hsla(${(a.hue + b.hue) / 2}, 70%, 55%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    function onMouseMove(e: MouseEvent) { mouseX = e.clientX; mouseY = e.clientY; }
    function onMouseLeave() { mouseX = -1000; mouseY = -1000; }

    resize();
    animId = requestAnimationFrame(draw);
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [count]);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" aria-hidden="true" />;
}
