import React, { Suspense, lazy } from 'react'
import { Navbar } from './components/natalia/Navbar'
import { HeroSection } from './components/natalia/HeroSection'
import { SectionDivider } from './components/natalia/SectionDivider'
import { WhatsAppButton } from './components/natalia/WhatsAppButton'
import { Toaster } from './components/ui/toaster'

// ALL below-the-fold sections lazy loaded to reduce initial bundle and TTI
const BeforeAfterSection = lazy(() => import('./components/natalia/BeforeAfterSection').then(m => ({ default: m.BeforeAfterSection })))
const ProblemSection = lazy(() => import('./components/natalia/ProblemSection').then(m => ({ default: m.ProblemSection })))
const TrustSection = lazy(() => import('./components/natalia/TrustSection').then(m => ({ default: m.TrustSection })))
const CTABanner = lazy(() => import('./components/natalia/CTABanner').then(m => ({ default: m.CTABanner })))
const ComparisonSection = lazy(() => import('./components/natalia/ComparisonSection').then(m => ({ default: m.ComparisonSection })))
const ProcessSection = lazy(() => import('./components/natalia/ProcessSection').then(m => ({ default: m.ProcessSection })))
const GoogleReviewsSection = lazy(() => import('./components/natalia/GoogleReviewsSection').then(m => ({ default: m.GoogleReviewsSection })))
const FAQSection = lazy(() => import('./components/natalia/FAQSection').then(m => ({ default: m.FAQSection })))
const FooterSection = lazy(() => import('./components/natalia/FooterSection').then(m => ({ default: m.FooterSection })))

// Minimal placeholder that matches site background
const SectionPlaceholder = () => <div className="min-h-[400px] w-full" />

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <section id="hero" aria-label="Hero">
          <HeroSection />
        </section>
        
        <SectionDivider />

        <Suspense fallback={<SectionPlaceholder />}>
          <section id="resultados" aria-label="Resultados">
            <BeforeAfterSection />
          </section>
          <section id="vantagens" aria-label="Vantagens">
            <ProblemSection />
          </section>
          
          <section id="credibilidade" aria-label="Credibilidade">
            <TrustSection />
          </section>
          
          <CTABanner />
          
          <section id="comparacao" aria-label="Comparação">
            <ComparisonSection />
          </section>
          
          <section id="processo" aria-label="Processo">
            <ProcessSection />
          </section>
          
          <GoogleReviewsSection />
          
          <section id="duvidas" aria-label="Dúvidas">
            <FAQSection />
          </section>
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <FooterSection />
      </Suspense>

      <WhatsAppButton />
      <Toaster />
    </div>
  )
}
