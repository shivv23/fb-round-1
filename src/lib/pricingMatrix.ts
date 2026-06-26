import type { Currency, BillingCycle, Tier, PricingTier } from '@/types';

const EXCHANGE_RATES: Record<Currency, number> = {
  INR: 83.5,
  USD: 1,
  EUR: 0.92,
};

const ANNUAL_DISCOUNT = 0.8;

type PriceFn = (baseRate: number) => number;

const MATRIX: Record<BillingCycle, Record<Currency, PriceFn>> = {
  monthly: {
    INR: (base) => Math.round(base * EXCHANGE_RATES.INR),
    USD: (base) => Math.round(base),
    EUR: (base) => Math.round(base * EXCHANGE_RATES.EUR),
  },
  annual: {
    INR: (base) => Math.round(base * EXCHANGE_RATES.INR * ANNUAL_DISCOUNT),
    USD: (base) => Math.round(base * ANNUAL_DISCOUNT),
    EUR: (base) => Math.round(base * EXCHANGE_RATES.EUR * ANNUAL_DISCOUNT),
  },
};

export function calculatePrice(tier: PricingTier, cycle: BillingCycle, currency: Currency): number {
  return MATRIX[cycle][currency](tier.baseRate);
}

export const TIERS: PricingTier[] = [
  {
    tier: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small projects getting started with AI automation.',
    baseRate: 29,
    features: [
      'Up to 1,000 automation runs/mo',
      'Basic AI data extraction',
      '2 API integrations',
      'Email support',
      '1 user seat',
    ],
  },
  {
    tier: 'pro',
    name: 'Professional',
    description: 'Built for growing teams that need advanced AI capabilities.',
    baseRate: 79,
    highlighted: true,
    features: [
      'Up to 10,000 automation runs/mo',
      'Advanced AI data extraction',
      'Unlimited API integrations',
      'Priority support',
      '10 user seats',
      'Custom workflows',
      'Analytics dashboard',
    ],
  },
  {
    tier: 'enterprise',
    name: 'Enterprise',
    description: 'Full-scale AI automation platform for large organizations.',
    baseRate: 199,
    features: [
      'Unlimited automation runs',
      'Enterprise AI models',
      'Custom integration development',
      'Dedicated account manager',
      'Unlimited user seats',
      'SLA guarantee',
      'On-premise deployment',
      '24/7 phone support',
    ],
  },
];

export function formatPrice(price: number, currency: Currency): string {
  const symbols: Record<Currency, string> = { INR: '₹', USD: '$', EUR: '€' };
  const locale: Record<Currency, string> = { INR: 'en-IN', USD: 'en-US', EUR: 'de-DE' };
  const symbol = symbols[currency];
  if (currency === 'INR') {
    return `${symbol}${price.toLocaleString(locale[currency])}`;
  }
  return `${symbol}${price.toLocaleString(locale[currency])}`;
}
