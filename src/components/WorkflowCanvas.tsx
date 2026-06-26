'use client';

import { CONTENT } from '@/lib/content';
import { Section, SectionHeader, SectionLabel } from './primitives';

export default function WorkflowCanvas() {
  const { label, headline, subtext, toolbox, nodes, branchNodes, commandBar } = CONTENT.workflow;
  return (
    <Section id="workflow">
      <SectionLabel>{label}</SectionLabel>
      <SectionHeader>{headline}</SectionHeader>
      <p className="text-sm text-[#a7a7a7] mb-10 max-w-2xl">{subtext}</p>
      <div className="bg-dotgrid border border-white/[0.06] rounded-md overflow-hidden" style={{ minHeight: 320 }}>
        <div className="flex h-full" style={{ minHeight: 320 }}>
          <div className="w-40 border-r border-white/[0.06] p-3 space-y-2 bg-white/[0.01]">
            {toolbox.map((item) => (
              <div key={item} className="text-xs text-[#a7a7a7] font-mono px-3 py-2 border border-white/[0.06] rounded-sm hover:border-white/[0.15] hover:text-white transition-all duration-150 cursor-default">
                {item}
              </div>
            ))}
          </div>
          <div className="flex-1 relative p-6" style={{ minHeight: 320 }}>
            <div className="absolute inset-0 bg-dotgrid pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                {nodes.map((node, i) => (
                  <>
                    {i > 0 && (
                      <svg key={`arrow-${i}`} className="w-6 h-6 text-white/20 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                    <div
                      key={node.label}
                      className={`px-4 py-3 rounded-sm text-xs font-mono ${
                        node.variant === 'accent'
                          ? 'border border-[#114c5a]/50 bg-[#114c5a]/10 text-[#114c5a]'
                          : 'border border-white/[0.12] bg-white/[0.03] text-white'
                      }`}
                    >
                      {node.label}
                    </div>
                  </>
                ))}
              </div>
              <div className="flex items-center gap-3 ml-16">
                <svg className="w-6 h-6 text-white/20 rotate-90 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
                {branchNodes.map((node) => (
                  <div
                    key={node.label}
                    className={`px-4 py-3 rounded-sm text-xs font-mono ${
                      node.variant === 'accent'
                        ? 'border border-[#114c5a]/50 bg-[#114c5a]/10 text-[#114c5a]'
                        : 'border border-white/[0.12] bg-white/[0.03] text-white'
                    }`}
                  >
                    {node.label}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-black/60 border border-white/[0.06] rounded-sm text-xs text-[#a7a7a7] font-mono">
                <span className="text-white/30">&gt;</span>
                <span>{commandBar}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
