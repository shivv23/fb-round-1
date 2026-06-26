import Navigation from '@/components/Navigation';
import Loader from '@/components/Loader';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import BentoAccordion from '@/components/BentoAccordion';
import TabbedPanel from '@/components/TabbedPanel';
import Dashboard from '@/components/Dashboard';
import StatsBar from '@/components/StatsBar';
import WorkflowCanvas from '@/components/WorkflowCanvas';
import PricingMatrix from '@/components/PricingMatrix';
import VideoTeaser from '@/components/VideoTeaser';
import CaseStudies from '@/components/CaseStudies';
import Articles from '@/components/Articles';
import Testimonials from '@/components/Testimonials';
import Integrations from '@/components/Integrations';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import FloatingBadge from '@/components/FloatingBadge';

export default function Home() {
  return (
    <>
      <div className="noise-overlay" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />
      <Loader />
      <Navigation />
      <FloatingBadge />
      <main>
        <Hero />

        {/* Dark → Dark */}
        <Features />

        {/* Dark → Light */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-bg-dark to-bg-light pointer-events-none z-10" aria-hidden="true" />
          <BentoAccordion />
        </div>

        {/* Light → Dark */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-bg-light to-bg-dark pointer-events-none z-10" aria-hidden="true" />
          <TabbedPanel />
        </div>

        {/* Dark → Dark */}
        <Dashboard />

        {/* Dark → Dark-alt */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-bg-dark to-bg-dark-alt pointer-events-none z-10" aria-hidden="true" />
          <StatsBar />
        </div>

        {/* Dark-alt → Dark */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-bg-dark-alt to-bg-dark pointer-events-none z-10" aria-hidden="true" />
          <WorkflowCanvas />
        </div>

        {/* Dark → Dark */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-bg-dark to-bg-dark pointer-events-none z-10" aria-hidden="true" />
          <PricingMatrix />
        </div>

        {/* Dark → Dark */}
        <VideoTeaser />

        {/* Dark → Light */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-bg-dark to-bg-[#f7f7f6] pointer-events-none z-10" aria-hidden="true" />
          <CaseStudies />
        </div>

        {/* Light → Light */}
        <Articles />

        {/* Light → Light */}
        <Testimonials />

        {/* Light → Dark */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-[#f7f7f6] to-bg-dark pointer-events-none z-10" aria-hidden="true" />
          <Integrations />
        </div>

        {/* Dark → Light */}
        <div className="relative">
          <div className="absolute -top-px left-0 right-0 h-16 bg-gradient-to-b from-bg-dark to-[#f7f7f6] pointer-events-none z-10" aria-hidden="true" />
          <FAQ />
        </div>
      </main>
      <Footer />
    </>
  );
}
