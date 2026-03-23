import { Navbar } from './components/natalia/Navbar'
import { HeroSection } from './components/natalia/HeroSection'
import { ProblemSection } from './components/natalia/ProblemSection'
import { BeforeAfterSection } from './components/natalia/BeforeAfterSection'
import { ComparisonSection } from './components/natalia/ComparisonSection'
import { ProcessSection } from './components/natalia/ProcessSection'
import { FAQSection } from './components/natalia/FAQSection'
import { TrustSection } from './components/natalia/TrustSection'
import { ContactForm } from './components/natalia/ContactForm'
import { FooterSection } from './components/natalia/FooterSection'
import { WhatsAppButton } from './components/natalia/WhatsAppButton'
import { CTABanner } from './components/natalia/CTABanner'
import { Toaster } from './components/ui/toaster'

import { SectionDivider } from './components/natalia/SectionDivider'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <Navbar />
      <main>
        <section id="hero" aria-label="Hero">
          <HeroSection />
        </section>
        <SectionDivider />
        <section id="resultados" aria-label="Resultados">
          <BeforeAfterSection />
        </section>
        <section id="vantagens" aria-label="Vantagens">
          <ProblemSection />
        </section>
        <CTABanner />
        <section id="comparacao" aria-label="Comparação">
          <ComparisonSection />
        </section>
        <section id="processo" aria-label="Processo">
          <ProcessSection />
        </section>
        <section id="duvidas" aria-label="Dúvidas">
          <FAQSection />
        </section>
        <section id="credibilidade" aria-label="Credibilidade">
          <TrustSection />
        </section>
      </main>
      <FooterSection />
      <WhatsAppButton />
      <Toaster />
    </div>
  )
}
