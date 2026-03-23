import { motion } from 'framer-motion'
import bgImg from '../../assets/secao-cta-cortada-webp.webp'

export function CTABanner() {
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=5585988991505'

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 drop-shadow-sm">
            Agende sua Avaliação Prime hoje
          </h2>
          <p className="font-body text-xl text-foreground/90 mb-10 max-w-xl mx-auto drop-shadow-sm">
            Descubra como o Invisalign pode transformar seu sorriso sem afetar sua rotina profissional.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-foreground text-white font-body font-bold px-12 py-5 rounded-xl text-xl hover:bg-gold-dark hover:text-white transition-all duration-300 shadow-2xl"
          >
            Quero Agendar →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
