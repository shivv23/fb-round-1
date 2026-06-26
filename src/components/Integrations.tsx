'use client';

import { INTEGRATIONS_DATA } from '@/lib/constants';
import { Section, SectionHeader, SectionLabel, useReveal } from './primitives';

export default function Integrations() {
  const { ref, visible } = useReveal(0.1);
  return (
    <Section id="integrations">
      <SectionLabel>/// INTEGRATIONS</SectionLabel>
      <SectionHeader>Bridges the gap between your data and your tools</SectionHeader>
      <p className="text-sm text-[#a7a7a7] mb-10 max-w-xl">Connect seamlessly with 200+ data sources including databases, APIs, cloud storage, and legacy systems.</p>
      <div ref={ref} className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 stagger-children ${visible ? 'visible' : ''}`}>
        {INTEGRATIONS_DATA.map((name) => (
          <div key={name} className="integration-tile">
            <span className="w-4 h-4 rounded-[3px] border border-white/20 mr-2 flex-shrink-0" />
            {name}
          </div>
        ))}
      </div>
    </Section>
  );
}
