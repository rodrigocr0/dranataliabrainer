import { motion } from 'framer-motion'
import videoSource from '../../assets/video-fundo-comp.mp4'
import videoPoster from '../../assets/tela-preload.webp'

export function CTABanner() {
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585988991505"

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={videoPoster}
          className="w-full h-full object-cover"
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        {/* Dark Overlay for Depth and Legibility */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <span className="text-gold font-body font-semibold tracking-[0.4em] uppercase text-xs sm:text-sm mb-6 block drop-shadow-sm">
            Experiência Invisalign Top Doctor Diamond
          </span>
          
          <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-md lg:whitespace-nowrap">
            Agende sua Avaliação <span className="text-gold italic">Prime</span> hoje
          </h2>
0
          <p className="font-body text-lg sm:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Descubra como o <span className="text-gold font-semibold">Invisalign</span> pode transformar seu sorriso sem afetar sua imagem profissional. Tudo sendo conduzido por uma das maiores especialistas Invisalign do <span className="text-gold font-semibold">Brasil</span>.
          </p>

          <motion.a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold inline-flex items-center justify-center px-12 py-6 rounded-full !text-white font-bold text-xl shadow-[0_15px_40px_rgba(212,175,55,0.4)] transition-all uppercase tracking-wider"
          >
            Quero Agendar Minha Consulta
          </motion.a>
        </motion.div>
      </div>

      {/* Aesthetic Accents */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  )
}
