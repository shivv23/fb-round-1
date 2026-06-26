'use client';

import { useRef, useCallback, useState, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useTiltEffect } from '@/hooks/useTiltEffect';
import { TIERS, calculatePrice, formatPrice } from '@/lib/pricingMatrix';
import type { Currency, BillingCycle } from '@/types';

const CURRENCIES: Currency[] = ['USD', 'INR', 'EUR'];
const CURRENCY_SYMBOLS: Record<Currency, string> = { USD: '$', INR: '₹', EUR: '€' };

function PricingCard({
  tier,
  index,
  activeCycle,
  priceNodesRef,
  shouldShow,
}: {
  tier: (typeof TIERS)[number];
  index: number;
  activeCycle: BillingCycle;
  priceNodesRef: React.MutableRefObject<(HTMLSpanElement | null)[][]>;
  shouldShow: boolean;
}) {
  const [tiltRef, onMouseMove, onMouseLeave] = useTiltEffect<HTMLDivElement>(5);
  const displayPrice = calculatePrice(tier, activeCycle, 'USD');
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      ref={(node) => {
        (tiltRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`card-3d relative rounded-2xl border p-8 transition-all duration-700 ${
        tier.highlighted
          ? 'border-gold/40 bg-gradient-to-b from-gold/5 to-transparent shadow-lg shadow-gold/10 md:scale-105 gradient-border'
          : 'border-white/10 bg-white/5 hover:border-white/20'
      } ${
        shouldShow
          ? 'opacity-100 translate-y-0 scale-100'
          : 'opacity-0 translate-y-12 scale-90'
      }`}
      style={{
        transitionDelay: `${0.3 + index * 0.18}s`,
        transformStyle: 'preserve-3d',
      }}
    >
      {tier.highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold rounded-full text-xs font-mono text-black font-semibold tracking-wider z-10">
          MOST POPULAR
        </div>
      )}

      <div className="relative">
        <div className="card-shine" />
        <div className="mb-6">
          <h3 className="font-mono text-lg font-bold text-white mb-2">{tier.name}</h3>
          <p className="text-text-secondary text-sm">{tier.description}</p>
        </div>

        <div className="mb-6">
          <div className="flex items-baseline gap-1">
            <span
              ref={(el) => { priceNodesRef.current[index][0] = el }}
              className="font-mono text-4xl font-bold text-white"
            >
              {mounted ? formatPrice(displayPrice, 'USD') : ''}
            </span>
            <span className="text-text-secondary text-sm font-mono">/month</span>
          </div>
          {activeCycle === 'annual' && (
            <div className="mt-1">
              <span ref={(el) => { priceNodesRef.current[index][1] = el }} className="text-xs font-mono text-gold">
                {mounted ? formatPrice(calculatePrice(tier, 'annual', 'USD'), 'USD') : ''}
              </span>
              <span className="text-xs text-text-secondary font-mono"> billed annually</span>
            </div>
          )}
          {activeCycle === 'monthly' && (
            <div className="text-xs text-text-secondary/50 font-mono mt-1">billed monthly</div>
          )}
        </div>

        <ul className="space-y-3 mb-8" role="list">
          {tier.features.map((feat, j) => (
            <li key={j} className="flex items-start gap-3 text-sm text-text-secondary group/feat">
              <svg className="w-4 h-4 mt-0.5 text-gold shrink-0 group-hover/feat:scale-110 transition-transform duration-150" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {feat}
            </li>
          ))}
        </ul>

        <a
          href="#"
          className={`block text-center py-3 rounded-lg text-sm font-medium transition-all duration-150 micro-active relative overflow-hidden group ${
            tier.highlighted
              ? 'bg-gold text-black hover:bg-gold-light shadow-lg shadow-gold/20'
              : 'border border-white/20 text-white hover:border-gold/50 hover:text-gold hover:bg-gold/5'
          }`}
        >
          <span className="relative z-10">{tier.highlighted ? 'Start Free Trial' : 'Get Started'}</span>
        </a>
      </div>
    </div>
  );
}

export default function PricingMatrix() {
  const [activeCycle, setActiveCycle] = useState<BillingCycle>('monthly');
  const [headerRef, headerVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [controlsRef, controlsVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [cardsVisible, setCardsVisible] = useState(false);
  const cycleRef = useRef<BillingCycle>('monthly');
  const currencyRef = useRef<HTMLSelectElement>(null);
  const priceNodesRef = useRef<(HTMLSpanElement | null)[][]>(TIERS.map(() => [null, null]));
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // match demo: heading shows first, cards after delay
          setTimeout(() => setCardsVisible(true), 400);
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const updatePrices = useCallback((cycle: BillingCycle) => {
    const currency = (currencyRef.current?.value || 'USD') as Currency;
    TIERS.forEach((tier, i) => {
      const mp = calculatePrice(tier, cycle, currency);
      const ap = calculatePrice(tier, 'annual', currency);
      if (priceNodesRef.current[i]?.[0]) priceNodesRef.current[i][0]!.textContent = formatPrice(mp, currency);
      if (priceNodesRef.current[i]?.[1]) priceNodesRef.current[i][1]!.textContent = formatPrice(ap, currency);
    });
  }, []);

  const handleCycleToggle = (cycle: BillingCycle) => {
    cycleRef.current = cycle;
    setActiveCycle(cycle);
    requestAnimationFrame(() => updatePrices(cycle));
  };

  const handleCurrencyChange = () => updatePrices(cycleRef.current);

  return (
    <section id="pricing" ref={sectionRef} className="py-24 bg-bg-dark overflow-hidden relative">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-bg-light/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-800 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDuration: '0.8s' }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-xs font-mono text-gold tracking-wider uppercase mb-4">
            Pricing
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Choose the plan that fits your scale. All plans include a 14-day free trial.
          </p>
        </div>

        <div
          ref={controlsRef}
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 ease-out ${
            controlsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '0.15s' }}
        >
          <div className="flex items-center gap-3 bg-white/5 rounded-full p-1 border border-white/10">
            <button
              onClick={() => handleCycleToggle('monthly')}
              className={`px-5 py-2 text-sm font-mono rounded-full transition-all duration-200 ${
                activeCycle === 'monthly'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-text-secondary hover:text-white'
              }`}
              aria-pressed={activeCycle === 'monthly'}
            >
              Monthly
            </button>
            <button
              onClick={() => handleCycleToggle('annual')}
              className={`px-5 py-2 text-sm font-mono rounded-full transition-all duration-200 ${
                activeCycle === 'annual'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-text-secondary hover:text-white'
              }`}
              aria-pressed={activeCycle === 'annual'}
            >
              Annual <span className="text-xs opacity-70">-20%</span>
            </button>
          </div>

          <div className="relative">
            <select
              ref={currencyRef}
              onChange={handleCurrencyChange}
              className="appearance-none bg-white/5 border border-white/10 rounded-full px-5 py-2 pr-10 text-sm font-mono text-white cursor-pointer hover:border-gold/30 transition-colors duration-150 focus:outline-none focus:border-gold/50"
              aria-label="Select currency"
            >
              {CURRENCIES.map((c) => (
                <option key={c} value={c} className="bg-bg-dark">{CURRENCY_SYMBOLS[c]} {c}</option>
              ))}
            </select>
            <img src="/svgs/chevron-down.svg" alt="" className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary pointer-events-none" aria-hidden="true" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {TIERS.map((tier, i) => (
            <PricingCard
              key={tier.tier}
              tier={tier}
              index={i}
              activeCycle={activeCycle}
              priceNodesRef={priceNodesRef}
              shouldShow={cardsVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
