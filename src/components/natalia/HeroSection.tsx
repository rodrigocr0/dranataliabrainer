import { motion, AnimatePresence } from 'framer-motion'
import { Diamond, MousePointer2 } from 'lucide-react'
import React, { useState, useRef, useEffect } from 'react'
import antesImg from '../../assets/antes-hero.webp'
import depoisImg from '../../assets/depois-hero.webp'
import videoPoster from '../../assets/tela-preload.webp'
import logoImg from '../../assets/logo_dra_natalia-webp.webp'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': any;
    }
  }
}

export function HeroSection() {
  const [sliderPos, setSliderPos] = useState(50)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)
  const wistiaRef = useRef<any>(null)

  const [isAutoAnimating, setIsAutoAnimating] = useState(false)
  const timerRef = useRef<any>(null)
  const intervalRef = useRef<any>(null)

  const stopAutoAnimation = () => {
    setIsAutoAnimating(false)
    setShowTooltip(false)
    if (timerRef.current) clearTimeout(timerRef.current)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    stopAutoAnimation()
    setSliderPos(Number(e.target.value))
  }

  const handleVideoCanPlayThrough = () => {
    setIsVideoLoaded(true)
  }

  useEffect(() => {
    const player = wistiaRef.current;
    if (!player) return;

    const handlePlay = () => {
      setIsVideoLoaded(true);
    };

    player.addEventListener('play', handlePlay);
    
    // Fallback caso o evento de play demore muito ou não dispare (autoplay bloqueado)
    const timer = setTimeout(() => setIsVideoLoaded(true), 5000);

    return () => {
      player.removeEventListener('play', handlePlay);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setIsAutoAnimating(true)
      const sequence = [20, 80, 20, 80, 50];
      let index = 0;
      
      intervalRef.current = setInterval(() => {
        if (index < sequence.length) {
          setSliderPos(sequence[index]);
          index++;
        } else {
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsAutoAnimating(false)
        }
      }, 700);
    }, 2000);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585988991505"

  const renderSlider = (className = "") => (
    <div className={`relative aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-[0_25px_55px_rgba(0,0,0,0.6)] select-none border-[3px] border-white/20 ring-1 ring-gold/40 mx-auto ${className}`} style={{ touchAction: 'pan-y' }}>
      {/* After Image */}
      <img
        src={depoisImg}
        alt="Depois"
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      />

      {/* Before Image (clipped) */}
      <div
        className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${isAutoAnimating ? 'transition-all duration-700 ease-in-out' : ''}`}
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <img
          src={antesImg}
          alt="Antes"
          className="absolute inset-0 w-full h-full object-cover shadow-[4px_0_12px_rgba(0,0,0,0.4)]"
        />
      </div>

      {/* Slider Visual Handle */}
      <div
        className={`absolute inset-y-0 w-0.5 bg-white/80 z-20 pointer-events-none ${isAutoAnimating ? 'transition-all duration-700 ease-in-out' : ''}`}
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-white border-[2.5px] border-gold rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/10">
          <div className="flex gap-1">
            <div className="w-0.5 h-3.5 bg-gold/40 rounded-full" />
            <div className="w-0.5 h-3.5 bg-gold rounded-full" />
          </div>
        </div>
      </div>

      {/* INPUT - Direct interaction with high z-index */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPos}
        onChange={handleSliderChange}
        onPointerDown={stopAutoAnimation}
        onTouchStart={stopAutoAnimation}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 appearance-none m-0 p-0"
        style={{ WebkitAppearance: 'none', touchAction: 'pan-y' }}
      />

      {/* Labels */}
      <div className="absolute top-4 right-4 z-10 pointer-events-none">
        <span className="bg-gold backdrop-blur-md text-white text-[9px] sm:text-xs font-bold px-4 py-1.5 rounded-full shadow-lg border border-white/10 uppercase tracking-widest whitespace-nowrap">
          6 meses de tratamento
        </span>
      </div>

      <div className="absolute bottom-5 left-5 z-10 pointer-events-none">
        <span className="bg-black/50 text-white text-[10px] sm:text-xs px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 font-bold tracking-[0.2em] uppercase">ANTES</span>
      </div>
      <div className="absolute bottom-5 right-5 z-10 pointer-events-none">
        <span className="bg-black/50 text-white text-[10px] sm:text-xs px-3 py-1 rounded-lg backdrop-blur-md border border-white/10 font-bold tracking-[0.2em] uppercase">DEPOIS</span>
      </div>
    </div>
  )

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden bg-black pb-4 sm:pb-0">
      {/* Video Background (Wistia) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden bg-black">
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
        <div className="absolute inset-0 bg-black/60 z-20" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-30 h-full flex items-center justify-center">
        {/* Mobile Logo handled inside the column for centering */}
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center w-full max-w-7xl pt-10 lg:pt-0">
          
          {/* Main Content Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* 0. Mobile Logo */}
            <div className="mb-4 lg:hidden">
              <img src={logoImg} alt="Dra. Natalia Brainer" className="h-9 opacity-90 mx-auto" />
            </div>

            {/* 1. Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-gold/40 rounded-full px-4 py-1.5 mb-4 lg:mb-8 shadow-lg"
            >
              <Diamond className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] sm:text-xs font-body font-bold text-white tracking-[0.2em] uppercase">
                Invisalign Top Doctor Diamond
              </span>
            </motion.div>

            {/* 2. Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-white mb-4 lg:mb-8 max-w-[320px] sm:max-w-xl lg:max-w-2xl">
              Sorriso impecável <br className="hidden sm:block" /> <span className="text-gold italic">sem aparelho metálico</span>
            </h1>

            {/* 3. Slider (MOBILE + TABLET) */}
            <div className="relative w-full max-w-[260px] sm:max-w-sm lg:hidden mb-6 group">
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="absolute z-50 -top-8 left-1/2 -translate-x-1/2 pointer-events-none"
                  >
                    <div className="bg-gold text-white text-[9px] font-bold px-4 py-2 rounded-full shadow-2xl flex items-center gap-2 animate-bounce">
                      <MousePointer2 className="w-3 h-3" /> Arraste para ver
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {renderSlider()}
            </div>

            {/* 4. Descriptive Text */}
            <p className="font-body text-[11px] sm:text-base lg:text-lg text-white/80 mb-5 lg:mb-10 max-w-[300px] sm:max-w-lg lg:max-w-xl leading-relaxed">
              O alinhador invisível para quem valoriza a própria imagem. Tecnologia de ponta para transformar seu sorriso de forma extremamente discreta.
            </p>

            {/* 5. Main Button */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-gold !text-white text-sm sm:text-lg px-8 py-4 sm:px-10 sm:py-5 rounded-full font-bold inline-block shadow-[0_15px_40px_rgba(212,175,55,0.3)] tracking-wide"
            >
              Quero me avaliar agora
            </motion.a>
          </motion.div>

          {/* RIGHT COLUMN (DESKTOP ONLY) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex flex-col items-center gap-10 relative"
          >
            {/* Desktop Logo Above Slider */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-2"
            >
              <img src={logoImg} alt="Dra. Natalia Brainer" className="h-14 opacity-95" />
            </motion.div>

            <div className="relative w-full">
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    className="absolute z-50 -top-10 left-1/2 -translate-x-1/2 pointer-events-none"
                  >
                    <div className="bg-gold text-white text-[10px] font-bold px-5 py-2.5 rounded-full shadow-2xl flex items-center gap-3 animate-bounce">
                      <MousePointer2 className="w-4 h-4" /> Arraste para ver
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {renderSlider("max-w-[400px] lg:max-w-[420px]")}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
