export const CONTENT = {
  features: {
    label: 'Platform Capabilities',
    headline: 'Enterprise AI, built for ',
    headlineAccent: 'scale',
    cards: [
      { title: 'Secure Guard', description: 'Enterprise-grade security with end-to-end encryption, zero-trust architecture, and real-time threat detection.', icon: 'shield' },
      { title: 'Agent Build', description: 'Design, train, and deploy custom AI agents that learn from your data and adapt to your workflows.', icon: 'grid' },
      { title: 'Cloud Scale', description: 'Auto-scaling infrastructure that handles millions of requests with sub-millisecond latency worldwide.', icon: 'compass' },
      { title: 'Data Mining', description: 'Advanced pattern recognition and anomaly detection across structured and unstructured data sources.', icon: 'target' },
    ],
  },
  tabbedPanel: {
    label: '/// PLATFORM CAPABILITIES',
    headline: 'Engineered for autonomy',
    tabs: [
      { id: 'discovery', label: 'Discovery', description: 'Automatically discover data sources across your infrastructure — databases, APIs, cloud storage, and legacy systems.', metrics: ['200+ connectors', 'Real-time discovery', 'Schema inference'], svgColors: ['#114c5a', '#1a6b80'] as const },
      { id: 'analysis', label: 'Analysis', description: 'AI-powered analysis that understands context, structure, and intent. Detects anomalies, patterns, and relationships.', metrics: ['Pattern recognition', 'Anomaly detection', 'Relationship mapping'], svgColors: ['#1a6b80', '#228a9e'] as const },
      { id: 'training', label: 'Training', description: 'Train custom models on your data with zero coding. Automated pipeline optimization and A/B testing built in.', metrics: ['Auto ML pipelines', 'A/B testing', 'Model registry'], svgColors: ['#228a9e', '#2aa9bc'] as const },
      { id: 'deploy', label: 'Deploy', description: 'Deploy to production with one click. Automatic scaling, monitoring, and rollback across any cloud or on-prem.', metrics: ['One-click deploy', 'Auto-scaling', 'Rollback support'], svgColors: ['#2aa9bc', '#33c8da'] as const },
    ],
  },
  dashboard: {
    label: '/// INTELLIGENCE',
    headline: 'Real-time neural dashboard',
    leftGauge: { value: 42, max: 100, label: 'System Load' },
    rightGauge: { value: 97, max: 100, label: 'SLA Response' },
    chartBars: [65, 42, 78, 55, 88, 72, 45, 91, 60, 38, 82, 70] as const,
    kpis: [
      { label: 'Records Processed', value: '12.8M' },
      { label: 'Active Pipelines', value: '147' },
      { label: 'Avg Latency', value: '4ms' },
    ],
  },
  workflow: {
    label: '/// WORKFLOW BUILDER',
    headline: 'Design, connect, deploy',
    subtext: 'Visual drag-and-drop interface for building complex data pipelines with pre-built AI agents.',
    toolbox: ['Extract', 'Transform', 'Analyze', 'Route', 'Store'],
    nodes: [
      { label: 'API Source', variant: 'default' },
      { label: 'Parse JSON', variant: 'accent' },
      { label: 'Transform', variant: 'accent' },
      { label: 'Load DB', variant: 'default' },
    ],
    branchNodes: [
      { label: 'Branch: Clean', variant: 'default' },
      { label: 'Aggregate', variant: 'accent' },
    ],
    commandBar: 'nova deploy --pipeline ingestion-v2 --env production',
  },
  videoTeaser: {
    duration: '2 MINUTES WATCH',
    cta: 'Watch Platform Overview',
  },
} as const;
