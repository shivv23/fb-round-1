export const SITE_NAME = 'NovaAutomate';
export const SITE_TITLE = 'NovaAutomate — AI-Powered Data Automation Platform';
export const SITE_DESCRIPTION = 'Transform your data workflows with next-generation AI automation. Extract, process, and analyze data at scale with zero manual effort.';

export const NAV_LINKS = [
  { label: 'Strategy', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
] as const;

export const MENU_ITEMS = [
  { label: 'Strategy', href: '#features' },
  { label: 'Agents', href: '#tabbed-panel' },
  { label: 'Automation', href: '#workflow' },
  { label: 'Intelligence', href: '#dashboard' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Articles', href: '#articles' },
  { label: 'FAQ', href: '#faq' },
] as const;

export const FEATURES_DATA = [
  {
    title: 'Secure Guard',
    description: 'Enterprise-grade security with end-to-end encryption, zero-trust architecture, and real-time threat detection.',
    icon: 'shield',
  },
  {
    title: 'Agent Build',
    description: 'Design, train, and deploy custom AI agents that learn from your data and adapt to your workflows.',
    icon: 'grid',
  },
  {
    title: 'Cloud Scale',
    description: 'Auto-scaling infrastructure that handles millions of requests with sub-millisecond latency worldwide.',
    icon: 'compass',
  },
  {
    title: 'Data Mining',
    description: 'Advanced pattern recognition and anomaly detection across structured and unstructured data sources.',
    icon: 'target',
  },
] as const;

export const TAB_ITEMS = [
  { id: 'discovery', label: 'Discovery', description: 'Automatically discover data sources across your infrastructure — databases, APIs, cloud storage, and legacy systems.', metrics: ['200+ connectors', 'Real-time discovery', 'Schema inference'] },
  { id: 'analysis', label: 'Analysis', description: 'AI-powered analysis that understands context, structure, and intent. Detects anomalies, patterns, and relationships.', metrics: ['Pattern recognition', 'Anomaly detection', 'Relationship mapping'] },
  { id: 'training', label: 'Training', description: 'Train custom models on your data with zero coding. Automated pipeline optimization and A/B testing built in.', metrics: ['Auto ML pipelines', 'A/B testing', 'Model registry'] },
  { id: 'deploy', label: 'Deploy', description: 'Deploy to production with one click. Automatic scaling, monitoring, and rollback across any cloud or on-prem.', metrics: ['One-click deploy', 'Auto-scaling', 'Rollback support'] },
] as const;

export const ARTICLES_DATA = [
  { date: '2026-06-12', readTime: '8 min read', title: 'Building autonomous data pipelines with neural agents', description: 'How modern AI agents are reshaping enterprise data workflows and what it means for your infrastructure.', featured: true },
  { date: '2026-06-08', readTime: '5 min read', title: 'Reducing latency in real-time data processing', description: 'Techniques for sub-millisecond data processing at scale.', featured: false },
  { date: '2026-06-03', readTime: '6 min read', title: 'The future of no-code AI automation', description: 'Why visual workflow builders are becoming essential for enterprise teams.', featured: false },
  { date: '2026-05-28', readTime: '4 min read', title: 'Security best practices for AI data pipelines', description: 'How to maintain robust security in modern AI-driven data pipelines.', featured: false },
  { date: '2026-05-22', readTime: '7 min read', title: 'Scaling AI inference across hybrid cloud', description: 'Strategies for deploying and scaling AI inference across hybrid cloud environments.', featured: false },
  { date: '2026-05-15', readTime: '5 min read', title: 'Integrating legacy systems with modern AI stacks', description: 'Bridging the gap between legacy infrastructure and modern AI tooling.', featured: false },
] as const;

export const QUOTES_DATA = [
  { headline: 'Game-changing automation', name: 'Sarah Chen', role: 'CTO, Northstar Labs', comment: 'NovaAutomate reduced our data processing time by 87%. The AI extraction is scarily accurate — it understands context better than most humans.', stars: 5 },
  { headline: 'Incredible scalability', name: 'Marcus Rivera', role: 'VP Eng, Vectoris', comment: 'We migrated our entire ETL pipeline in two days. The visual workflow builder made it possible for our non-technical team to contribute.', stars: 5 },
  { headline: 'Enterprise-ready platform', name: 'Priya Patel', role: 'Head of Data, FinTech Labs', comment: 'We process 50M+ records daily with zero issues. The transparent pricing and unmatched performance sold us immediately.', stars: 5 },
  { headline: 'Brilliant architecture', name: 'James Okonkwo', role: 'Principal Eng, CloudBridge', comment: 'The state isolation and context-aware processing are architectural marvels. This is how modern data platforms should be built.', stars: 5 },
] as const;

export const INTEGRATIONS_DATA = [
  'Postgres', 'MongoDB', 'Redis', 'Kafka', 'S3', 'BigQuery', 'Snowflake', 'Databricks', 'Airflow', 'dbt', 'Fivetran', 'Stitch',
] as const;

export const FAQ_DATA = [
  { q: 'What is NovaAutomate?', a: 'NovaAutomate is an AI-powered data automation platform that helps enterprises extract, process, and analyze data at scale with zero manual effort.' },
  { q: 'How does the pricing work?', a: 'We offer transparent per-workflow pricing with three tiers: Starter, Professional, and Enterprise. All plans include a 14-day free trial.' },
  { q: 'Can I integrate with my existing tools?', a: 'Yes. We support 200+ native integrations including databases, APIs, cloud storage, and legacy systems.' },
  { q: 'Is my data secure?', a: 'Absolutely. We use end-to-end encryption, zero-trust architecture, and SOC 2 compliant infrastructure.' },
  { q: 'How long does implementation take?', a: 'Most teams go live within days. Our visual workflow builder and pre-built connectors make integration seamless.' },
  { q: 'Do you offer enterprise support?', a: 'Yes. Enterprise plans include a dedicated account manager, 24/7 phone support, and custom integration development.' },
  { q: 'Can I deploy on-premise?', a: 'Yes. Enterprise plans support on-premise deployment with full SLA guarantees.' },
  { q: 'What happens during the free trial?', a: 'You get full access to all Professional features for 14 days with no credit card required.' },
] as const;

export const CASE_STUDIES_DATA = [
  { date: '//2026', title: 'Northstar Labs reduces processing time by 87%', description: 'How a leading AI research lab transformed their data infrastructure with NovaAutomate\'s intelligent pipeline orchestration.', gradient: 'from-blue-600/20 to-indigo-600/20' },
  { date: '//2026', title: 'Vectoris scales to 50M daily records', description: 'A fintech unicorn achieves sub-millisecond latency across hybrid cloud infrastructure using autonomous agent deployment.', gradient: 'from-teal-600/20 to-emerald-600/20' },
  { date: '//2026', title: 'CloudBridge achieves 99.99% uptime', description: 'Enterprise SaaS provider eliminates data pipeline failures with NovaAutomate\'s self-healing architecture.', gradient: 'from-purple-600/20 to-pink-600/20' },
] as const;

export const KPI_DATA = [
  { label: 'System Load', value: '42%', max: 100 },
  { label: 'SLA Response', value: '99.97%', max: 100 },
  { label: 'Token Usage', value: '1.8M', max: 5 },
] as const;
