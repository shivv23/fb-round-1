'use client';

import { useState } from 'react';
import { CONTENT } from '@/lib/content';
import { Section, SectionHeader, SectionLabel, Divider } from './primitives';

function TabMockSVG({ colors }: { colors: readonly [string, string] }) {
  return (
    <svg viewBox="0 0 280 200" className="w-full h-auto" aria-hidden="true">
      <rect width="280" height="200" rx="4" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <rect x="16" y="16" width="60" height="16" rx="2" fill={colors[0]} opacity="0.4" />
      <rect x="16" y="40" width="80" height="8" rx="2" fill="rgba(255,255,255,0.08)" />
      <rect x="16" y="56" width="60" height="8" rx="2" fill="rgba(255,255,255,0.05)" />
      <rect x="16" y="80" width="100" height="80" rx="3" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <circle cx="40" cy="100" r="12" fill={colors[0]} opacity="0.3" />
      <circle cx="80" cy="100" r="8" fill={colors[1]} opacity="0.3" />
      <line x1="52" y1="100" x2="72" y2="100" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
      <rect x="16" y="172" width="40" height="16" rx="2" fill={colors[0]} opacity="0.4" />
      <rect x="64" y="172" width="40" height="16" rx="2" fill={colors[1]} opacity="0.2" />
    </svg>
  );
}

type TabId = typeof CONTENT.tabbedPanel.tabs[number]['id'];

export default function TabbedPanel() {
  const [active, setActive] = useState<TabId>(CONTENT.tabbedPanel.tabs[0].id);
  const current = CONTENT.tabbedPanel.tabs.find(t => t.id === active)!;

  return (
    <Section id="tabbed-panel" className="pb-0">
      <SectionLabel>{CONTENT.tabbedPanel.label}</SectionLabel>
      <SectionHeader>{CONTENT.tabbedPanel.headline}</SectionHeader>
      <div className="grid md:grid-cols-2 gap-12 items-start mt-12">
        <div className="bg-white/[0.02] border border-white/[0.06] rounded-md p-6">
          <TabMockSVG colors={[current.svgColors[0], current.svgColors[1]]} />
        </div>
        <div>
          <div className="tab-bar overflow-x-auto" role="tablist" aria-label="Platform features">
            {CONTENT.tabbedPanel.tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={active === tab.id}
                className={`tab-btn ${active === tab.id ? 'active' : ''}`}
                onClick={() => setActive(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-8" role="tabpanel">
            <p className="text-sm text-[#a7a7a7] leading-relaxed mb-6">{current.description}</p>
            <Divider className="mb-6" />
            <div className="space-y-2">
              {current.metrics.map((m) => (
                <div key={m} className="flex items-center gap-3 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#114c5a]" />
                  <span className="text-[#a7a7a7]">{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
