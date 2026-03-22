import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    q: 'Quanto custa o Invisalign?',
    a: 'O investimento varia de R$ 12.000 a R$ 18.000, dependendo da complexidade do caso. Oferecemos parcelamento em até 12x sem juros. Agende uma consulta para conhecer as opções.',
  },
  {
    q: 'Quanto tempo leva o tratamento?',
    a: 'A maioria dos casos leva de 6 a 18 meses. Na consulta gratuita, você receberá uma estimativa personalizada.',
  },
  {
    q: 'Aparece o alinhador quando estou falando?',
    a: 'Os alinhadores são praticamente invisíveis. Na grande maioria das situações — reuniões, apresentações, fotos — ninguém percebe.',
  },
  {
    q: 'Preciso tirar para comer?',
    a: 'Sim, e isso é uma vantagem! Você remove para comer e escovar os dentes, mantendo a higiene e aproveitando suas refeições sem restrições.',
  },
  {
    q: 'Dói? É confortável?',
    a: 'Você pode sentir uma leve pressão nos primeiros dias de cada alinhador, mas é muito mais confortável que o aparelho metálico. Sem fios cortantes ou brackets.',
  },
  {
    q: 'Vocês aceitam convênio ou parcelamento?',
    a: 'Oferecemos parcelamento em até 12x sem juros. Também aceitamos alguns convênios odontológicos. Agende uma consulta para conhecer as opções disponíveis.',
  },
]

export function FAQSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Dúvidas <span className="text-gold">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border rounded-lg px-6 bg-cream data-[state=open]:border-gold/30"
              >
                <AccordionTrigger className="font-body font-semibold text-foreground text-left hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
