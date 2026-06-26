export function PlayIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" />
    </svg>
  );
}

export function FeatureIcon({ name, className = 'w-5 h-5' }: { name: string; className?: string }) {
  switch (name) {
    case 'shield':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 2L3 7v6c0 5.25 3.83 10.14 9 11 5.17-.86 9-5.75 9-11V7l-9-5z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case 'grid':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <rect x="2" y="2" width="8" height="8" rx="1.5" />
          <rect x="14" y="2" width="8" height="8" rx="1.5" />
          <rect x="2" y="14" width="8" height="8" rx="1.5" />
          <rect x="14" y="14" width="8" height="8" rx="1.5" />
          <path d="M6 10v4M18 10v4M10 6h4M10 18h4" />
        </svg>
      );
    case 'compass':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M21 12a9 9 0 11-9-9" />
          <path d="M21 3v9h-9" />
          <path d="M3 12h3M12 3v3M18 12h3M12 18v3" />
        </svg>
      );
    case 'target':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M3 3l3 3M21 3l-3 3M3 21l3-3M21 21l-3-3" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="2" />
          <path d="M12 8V4M12 20v-4M8 12H4M20 12h-4" />
        </svg>
      );
    default:
      return null;
  }
}
