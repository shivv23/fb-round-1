'use client';

export default function FloatingBadge() {
  return (
    <div className="floating-badge" role="status" aria-label="Product version">
      <span className="floating-badge-dot" aria-hidden="true" />
      <span>v2.1 — Production</span>
    </div>
  );
}
