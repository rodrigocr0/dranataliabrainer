import { motion } from 'framer-motion'
import { Diamond } from 'lucide-react'
import React, { useState } from 'react'
import antesImg from '../../assets/antes-hero.webp'
import depoisImg from '../../assets/depois-hero.webp'

export function HeroSection() {
  const [sliderPos, setSliderPos] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPos(Number(e.target.value))
  }

  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585988991505"

  return (
    <section className="relative h-screen min-h-[600px] flex items-center bg-gradient-to-b from-background to-beige overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gold" />
        <div className="absolute bottom-40 right-40 w-96 h-96 rounded-full border border-gold" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-4">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-3 py-1 mb-3 self-center lg:self-start w-fit"
            >
              <Diamond className="w-3.5 h-3.5 text-gold" />
              <span className="text-[10px] sm:text-xs font-body font-semibold text-gold-dark tracking-wide">
                Invisalign Top Doctor Diamond
              </span>
            </motion.div>

            <h1 className="font-display text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] text-foreground mb-3">
              Sorriso impecável <span className="text-gold">sem aparelho metálico</span>
            </h1>

            <p className="font-body text-sm sm:text-lg text-muted-foreground mb-5 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              O alinhador invisível para quem valoriza a própria imagem. Tecnologia de ponta e maestria clínica para transformar seu sorriso de forma elegante e discreta.
            </p>

            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-3.5 rounded-lg cursor-pointer font-body inline-block self-center lg:self-start transition-all"
            >
              Quero me avaliar agora
            </motion.a>
          </motion.div>

          {/* Before/After Slider */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-full aspect-square max-w-[260px] sm:max-w-sm lg:max-w-md bg-beige rounded-2xl overflow-hidden shadow-2xl group select-none border-4 border-white/50">
              {/* After Image (Background) */}
              <img
                src={depoisImg}
                alt="Depois"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Before Image (Foreground, clipped) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={antesImg}
                  alt="Antes"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>

              {/* Slider Line */}
              <div
                className="absolute inset-y-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none shadow-[0_0_10px_rgba(0,0,0,0.3)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border-2 border-gold rounded-full flex items-center justify-center shadow-lg">
                  <div className="flex gap-1">
                    <div className="w-0.5 h-3 sm:w-1 sm:h-4 bg-gold/40 rounded-full" />
                    <div className="w-0.5 h-3 sm:w-1 sm:h-4 bg-gold rounded-full" />
                  </div>
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30 appearance-none"
              />

              {/* Badges and Labels */}
              <div className="absolute top-4 right-4 z-40 pointer-events-none">
                <span className="bg-gold text-white text-[9px] sm:text-xs font-bold px-2.5 py-1 rounded-full shadow-lg border border-white/20 tracking-tighter uppercase whitespace-nowrap">
                  Resultado em 6 meses
                </span>
              </div>

              <div className="absolute bottom-4 left-4 z-10 pointer-events-none">
                <span className="bg-black/40 text-white text-[9px] sm:text-xs px-2 py-0.5 rounded backdrop-blur-sm font-body tracking-wider uppercase">ANTES</span>
              </div>
              <div className="absolute bottom-4 right-4 z-10 pointer-events-none">
                <span className="bg-gold/80 text-white text-[9px] sm:text-xs px-2 py-0.5 rounded backdrop-blur-sm font-body tracking-wider uppercase">DEPOIS</span>
              </div>

              {/* Gold accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light z-40" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
