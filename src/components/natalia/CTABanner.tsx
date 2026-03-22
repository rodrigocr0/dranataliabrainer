import { motion } from 'framer-motion'

export function CTABanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-gold-dark via-gold to-gold-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Agende sua Avaliação Prime hoje
          </h2>
          <p className="font-body text-foreground/80 mb-8 max-w-lg mx-auto">
            Descubra como o Invisalign pode transformar seu sorriso sem afetar sua rotina profissional.
          </p>
          <a
            href="#contato"
            className="inline-block bg-foreground text-background font-body font-bold px-10 py-4 rounded-lg text-lg hover:bg-foreground/90 transition-colors"
          >
            Quero Agendar →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
