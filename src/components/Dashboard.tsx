'use client';

import { CONTENT } from '@/lib/content';
import { Section, SectionHeader, SectionLabel } from './primitives';

function Gauge({ value, max }: { value: number; max: number }) {
  const pct = value / max;
  const r = 36;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);
  return (
    <div className="gauge-container">
      <svg width="96" height="56" viewBox="0 0 96 56" aria-hidden="true">
        <path d="M8 48 A40 40 0 0 1 88 48" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="6" strokeLinecap="round" />
        <path d="M8 48 A40 40 0 0 1 88 48" fill="none" stroke="#114c5a" strokeWidth="6" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
        <text x="48" y="34" textAnchor="middle" fill="white" fontSize="14" fontFamily="monospace" fontWeight="bold">{value}%</text>
      </svg>
    </div>
  );
}

function MiniChart({ bars }: { bars: readonly number[] }) {
  const h = 60;
  return (
    <svg viewBox="0 0 160 64" className="w-full h-auto" aria-hidden="true">
      <rect y="0" width="160" height="64" fill="rgba(255,255,255,0.02)" rx="4" />
      {bars.map((b, i) => (
        <rect key={i} x={4 + i * 12.6} y={h - (b / 100) * 48} width="8" height={(b / 100) * 48} rx="2" fill="#114c5a" opacity={0.3 + (b / 100) * 0.5} />
      ))}
      <line x1="0" y1="50" x2="160" y2="50" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <line x1="0" y1="35" x2="160" y2="35" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
    </svg>
  );
}

export default function Dashboard() {
  const { label, headline, leftGauge, rightGauge, chartBars, kpis } = CONTENT.dashboard;
  return (
    <Section id="dashboard">
      <SectionLabel>{label}</SectionLabel>
      <SectionHeader>{headline}</SectionHeader>
      <div className="grid md:grid-cols-5 gap-6 mt-12">
        <div className="md:col-span-1 flex flex-col items-center justify-center gap-2 bg-white/[0.02] border border-white/[0.06] rounded-md p-6">
          <Gauge value={leftGauge.value} max={leftGauge.max} />
          <span className="text-xs text-[#a7a7a7] font-mono">{leftGauge.label}</span>
        </div>
        <div className="md:col-span-3 bg-white/[0.02] border border-white/[0.06] rounded-md p-6">
          <MiniChart bars={chartBars} />
        </div>
        <div className="md:col-span-1 flex flex-col items-center justify-center gap-2 bg-white/[0.02] border border-white/[0.06] rounded-md p-6">
          <Gauge value={rightGauge.value} max={rightGauge.max} />
          <span className="text-xs text-[#a7a7a7] font-mono">{rightGauge.label}</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {kpis.map((kpi) => (
          <div key={kpi.label} className="bg-white/[0.02] border border-white/[0.06] rounded-md px-4 py-3 text-center">
            <div className="text-xs text-[#a7a7a7] font-mono mb-1">{kpi.label}</div>
            <div className="text-xl font-bold font-mono text-white">{kpi.value}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
