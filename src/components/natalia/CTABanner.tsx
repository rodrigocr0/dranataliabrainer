import { motion } from 'framer-motion'
import bgImg from '../../assets/secao-cta-cortada-webp.webp'

export function CTABanner() {
  const whatsappUrl = 'https://api.whatsapp.com/send?phone=5585988991505'

  return (
    <section className="relative py-24 lg:py-36 overflow-hidden bg-black">
      {/* Background Image with High Contrast Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat grayscale-[30%] opacity-80"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.2em] uppercase text-sm mb-6 block drop-shadow-md">
            Oportunidade Exclusiva
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-lg">
            Agende sua Avaliação <span className="text-gold">Prime</span> hoje
          </h2>
          <p className="font-body text-xl sm:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Descubra como o <span className="text-gold font-semibold">Invisalign</span> pode transformar seu sorriso sem afetar sua rotina profissional.
          </p>
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(212, 175, 55, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-3 px-14 py-6 rounded-xl text-xl font-bold shadow-2xl tracking-wide"
          >
            Quero Agendar Minha Consulta
            <span className="text-2xl">→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
