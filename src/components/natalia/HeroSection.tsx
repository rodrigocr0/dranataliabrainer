import { motion, AnimatePresence } from 'framer-motion'
import { Diamond, MousePointer2 } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import antesImg from '../../assets/antes-hero.webp'
import depoisImg from '../../assets/depois-hero.webp'
import videoSource from '../../assets/video-fundo-comp.mp4'
import videoPoster from '../../assets/video-fundo-hero-cover.webp'

export function HeroSection() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isAutoAnimating, setIsAutoAnimating] = useState(false)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAutoAnimating(false)
    setShowTooltip(false)
    setSliderPos(Number(e.target.value))
  }

  const handleVideoCanPlayThrough = () => {
    setIsVideoLoaded(true)
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video play failed:", error)
      })
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAutoAnimating(true)
      const sequence = [20, 80, 20, 80, 50];
      let index = 0;
      
      const interval = setInterval(() => {
        if (index < sequence.length) {
          setSliderPos(sequence[index]);
          index++;
        } else {
          clearInterval(interval);
          setIsAutoAnimating(false)
        }
      }, 700);
      
      return () => {
        clearInterval(interval);
        setIsAutoAnimating(false)
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585988991505"

  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={videoPoster}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onCanPlayThrough={handleVideoCanPlayThrough}
        >
          <source src={videoSource} type="video/mp4" />
        </video>
        
        {!isVideoLoaded && (
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${videoPoster})` }}
          />
        )}

        <div className="absolute inset-0 bg-black/60 z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-gold/40 rounded-full px-4 py-1.5 mb-6 self-center lg:self-start shadow-lg"
            >
              <Diamond className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] sm:text-xs font-body font-bold text-white tracking-widest uppercase">
                Invisalign Top Doctor Diamond
              </span>
            </motion.div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] text-white mb-6">
              Sorriso impecável <span className="text-gold italic">sem aparelho metálico</span>
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-white/80 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              O alinhador invisível para quem valoriza a própria imagem. Tecnologia de ponta para transformar seu sorriso de forma elegante e discreta.
            </p>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold !text-white text-lg px-10 py-5 rounded-full font-bold inline-block shadow-[0_15px_35px_rgba(212,175,55,0.3)]"
            >
              Quero me avaliar agora
            </motion.a>
          </motion.div>

          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative"
          >
            {/* Tooltip Bubble */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute z-50 -top-8 left-1/2 lg:left-[calc(50%+4rem)] -translate-x-1/2 pointer-events-none"
                >
                  <div className="bg-gold text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap animate-bounce">
                    <MousePointer2 className="w-3 h-3" />
                    Arraste para ver
                  </div>
                  <div className="w-2 h-2 bg-gold rotate-45 mx-auto -mt-1 shadow-xl" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative w-full aspect-square max-w-[280px] sm:max-w-md lg:max-w-lg bg-black/20 rounded-3xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] group select-none border-[3px] border-white/20 ring-1 ring-gold/40">
              {/* After Image */}
              <img
                src={depoisImg}
                alt="Depois"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (clipped) */}
              <div
                className={`absolute inset-0 w-full h-full overflow-hidden ${isAutoAnimating ? 'transition-all duration-700 ease-in-out' : ''}`}
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={antesImg}
                  alt="Antes"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider UI */}
              <div
                className={`absolute inset-y-0 w-0.5 bg-white/80 cursor-ew-resize z-20 pointer-events-none ${isAutoAnimating ? 'transition-all duration-700 ease-in-out' : ''}`}
                style={{ left: `${sliderPos}%` }}
              >
                {/* Visual Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-[3px] border-gold rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                  <div className="flex gap-1.5">
                    <div className="w-0.5 h-4 bg-gold/40 rounded-full" />
                    <div className="w-0.5 h-4 bg-gold rounded-full" />
                  </div>
                </div>
              </div>

              {/* Interaction Layer */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 appearance-none"
              />

              {/* Comparison Marks */}
              <div className="absolute top-6 right-6 z-40 pointer-events-none">
                <span className="bg-gold/90 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-white/20 uppercase tracking-[0.2em]">
                  Caso Real • 6 meses
                </span>
              </div>

              <div className="absolute bottom-6 left-6 z-10 pointer-events-none">
                <span className="bg-black/40 text-white text-[10px] px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 font-bold tracking-widest uppercase">ANTES</span>
              </div>
              <div className="absolute bottom-6 right-6 z-10 pointer-events-none">
                <span className="bg-black/40 text-white text-[10px] px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 font-bold tracking-widest uppercase">DEPOIS</span>
              </div>

              {/* Golden Frame Accent */}
              <div className="absolute inset-0 border-[1px] border-gold/10 rounded-3xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-30 animate-pulse hidden lg:block">
        <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent mx-auto" />
      </div>
    </section>
  )
}
