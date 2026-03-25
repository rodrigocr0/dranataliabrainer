import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import videoPoster from '../../assets/tela-preload.webp'

export function CTABanner() {
  const whatsappUrl = "https://tintim.link/whatsapp/9634acf3-f59c-4f54-bff8-b2999aeab15c/bddc9850-a67d-4483-9d46-7723f5351099"
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const wistiaRef = useRef<any>(null)

  useEffect(() => {
    const player = wistiaRef.current;
    if (!player) return;

    const handlePlay = () => {
      setIsVideoLoaded(true);
    };

    player.addEventListener('play', handlePlay);
    
    // Fallback
    const timer = setTimeout(() => setIsVideoLoaded(true), 5000);

    return () => {
      player.removeEventListener('play', handlePlay);
      clearTimeout(timer);
    };
  }, [])

  return (
    <section className="relative py-24 lg:py-40 overflow-hidden bg-black">
      {/* Video Background (Wistia) */}
      <div className="absolute inset-0 z-0 overflow-hidden bg-black">
        {/* Imagem de Preload (Poster) */}
        {!isVideoLoaded && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center z-10" 
            style={{ backgroundImage: `url(${videoPoster})` }} 
          />
        )}

        <div 
          className={`w-full h-full transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            minWidth: '100%', 
            minHeight: '100%',
            width: '177.78vh',
            height: '56.25vw'
          }}
        >
          <wistia-player 
            ref={wistiaRef}
            media-id="owjhbk9dx6" 
            autoplay="true" 
            muted="true" 
            loop="true" 
            play-bar="false" 
            small-play-button="false" 
            controls-visible="false"
            settings-control="false"
            copy-link-and-thumbnail="false"
            style={{ width: '100%', height: '100%', display: 'block' }}
          ></wistia-player>
        </div>
        {/* Dark Overlay for Depth and Legibility */}
        <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-20" />
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
            Agende sua consulta hoje
          </h2>

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
