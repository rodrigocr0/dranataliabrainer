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
    <section className="relative h-screen min-h-[500px] flex items-center overflow-hidden bg-black py-4 lg:py-0">
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

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 h-full flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center w-full">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-gold/40 rounded-full px-3 py-1 mb-4 self-center lg:self-start shadow-lg"
            >
              <Diamond className="w-3 h-3 text-gold" />
              <span className="text-[10px] font-body font-bold text-white tracking-[0.2em] uppercase">
                Invisalign Top Doctor Diamond
              </span>
            </motion.div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white mb-4 lg:max-w-xl">
              Sorriso impecável <br className="hidden sm:block" /> <span className="text-gold italic">sem aparelho metálico</span>
            </h1>

            <p className="font-body text-sm sm:text-base lg:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              O alinhador invisível para quem valoriza a própria imagem. Tecnologia de ponta para transformar seu sorriso de forma discreta.
            </p>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold !text-white text-base sm:text-lg px-8 py-4 sm:px-10 sm:py-4 rounded-full font-bold inline-block shadow-[0_10px_30px_rgba(212,175,55,0.3)]"
            >
              Quero me avaliar agora
            </motion.a>
          </motion.div>

          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center relative scale-90 sm:scale-100"
          >
            {/* Tooltip Bubble */}
            <AnimatePresence>
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="absolute z-50 -top-6 left-1/2 -translate-x-1/2 pointer-events-none"
                >
                  <div className="bg-gold text-white text-[9px] font-bold px-3 py-1.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap animate-bounce">
                    <MousePointer2 className="w-2.5 h-2.5" />
                    Arraste para ver
                  </div>
                  <div className="w-1.5 h-1.5 bg-gold rotate-45 mx-auto -mt-0.5 shadow-xl" />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative w-full aspect-square max-w-[240px] sm:max-w-md bg-black/20 rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] group select-none border-[3px] border-white/20 ring-1 ring-gold/40">
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
                  className="absolute inset-0 w-full h-full object-cover shadow-[4px_0_10px_rgba(0,0,0,0.3)] z-10"
                />
              </div>

              {/* Slider UI */}
              <div
                className={`absolute inset-y-0 w-0.5 bg-white cursor-ew-resize z-20 pointer-events-none ${isAutoAnimating ? 'transition-all duration-700 ease-in-out' : ''}`}
                style={{ left: `${sliderPos}%` }}
              >
                {/* Visual Handle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white border-[2.5px] border-gold rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/20">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-3 bg-gold/40 rounded-full" />
                    <div className="w-0.5 h-3 bg-gold rounded-full" />
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
              <div className="absolute top-5 right-5 z-40 pointer-events-none">
                <span className="bg-gold/90 backdrop-blur-md text-white text-[9px] sm:text-xs font-bold px-4 py-2 rounded-full shadow-lg border border-white/20 uppercase tracking-[0.2em]">
                  Resultado em 6 meses
                </span>
              </div>

              <div className="absolute bottom-5 left-5 z-10 pointer-events-none">
                <span className="bg-black/50 text-white text-[9px] px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 font-bold tracking-widest uppercase">ANTES</span>
              </div>
              <div className="absolute bottom-5 right-5 z-10 pointer-events-none">
                <span className="bg-black/50 text-white text-[9px] px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 font-bold tracking-widest uppercase">DEPOIS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
