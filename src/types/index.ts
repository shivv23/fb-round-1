export type Currency = 'INR' | 'USD' | 'EUR';
export type BillingCycle = 'monthly' | 'annual';
export type Tier = 'starter' | 'pro' | 'enterprise';

export interface PricingTier {
  tier: Tier;
  name: string;
  description: string;
  baseRate: number;
  features: string[];
  highlighted?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}
