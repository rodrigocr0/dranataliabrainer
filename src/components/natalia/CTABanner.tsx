import { motion } from 'framer-motion'
import ctaBg from '../../assets/secao-cta-cortada-2.webp'

export function CTABanner() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585988991505"

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaBg} 
          alt="Consultório Dra. Natalia" 
          className="w-full h-full object-cover grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 block drop-shadow-sm">
            Experiência Invisalign Top Doctor Diamond
          </span>
          
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-md whitespace-normal lg:whitespace-nowrap">
            Agende sua Avaliação <span className="text-gold italic">Prime</span> hoje
          </h2>

          <p className="font-body text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Descubra como o <span className="text-gold font-semibold">Invisalign</span> pode transformar seu sorriso sem afetar sua imagem profissional.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold inline-flex items-center justify-center px-10 py-5 rounded-full text-white font-bold text-lg shadow-[0_10px_30px_rgba(212,175,55,0.3)] transition-all"
          >
            Quero Agendar Minha Consulta
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
