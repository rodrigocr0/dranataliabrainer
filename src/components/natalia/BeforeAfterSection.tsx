import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Heart, MessageCircle, Send, Bookmark, CheckCircle2 } from 'lucide-react'
import avatarImg from '../../assets/perfil-instagram.jpg'
import antesImg from '../../assets/antes-hero-webp.webp'
import depoisImg from '../../assets/depois-hero-webp.webp'

const testimonials = [
  {
    author: 'dranataliabrainer',
    patient: 'Adelaide Marques',
    text: 'Transformação incrível em apenas 8 meses. Discreto e eficiente. Paciente radiante com o novo sorriso! ✨',
  },
  {
    author: 'dranataliabrainer',
    patient: 'Cláudio Ferreira',
    text: 'A melhor escolha para quem tem agenda cheia. Maestria Diamond! Resultado que superou as expectativas. 💎',
  },
  {
    author: 'dranataliabrainer',
    patient: 'Ricardo Santos',
    text: 'Invisalign mudou minha segurança em reuniões. Resultado impecável e totalmente invisível. 🚀',
  },
]

export function BeforeAfterSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-12 lg:py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-gold font-body font-semibold tracking-widest uppercase text-xs mb-3 block">Sorrisos transformados sem dor</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Veja alguns sorrisos que já transformamos
          </h2>
        </motion.div>

        <div className="relative max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-border"
            >
              {/* Instagram Style Header */}
              <div className="flex items-center justify-between p-3 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                      <img src={avatarImg} alt="Dra. Natalia" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-body text-xs font-bold text-foreground">dranataliabrainer</span>
                      <CheckCircle2 className="w-3 h-3 text-[#0095f6] fill-[#0095f6] text-white" />
                    </div>
                    <p className="text-[10px] text-muted-foreground font-body leading-none">Dra Natalia Brainer • Ortodontista</p>
                  </div>
                </div>
              </div>

              {/* Photos Grid (Square Layout) */}
              <div className="aspect-square relative flex">
                <div className="w-1/2 h-full border-r-[0.5px] border-white relative overflow-hidden group">
                  <img src={antesImg} alt="Antes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-2 left-2 bg-black/50 text-[10px] text-white px-2 py-0.5 rounded font-body uppercase tracking-tighter">Antes</span>
                </div>
                <div className="w-1/2 h-full border-l-[0.5px] border-white relative overflow-hidden group">
                  <img src={depoisImg} alt="Depois" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-2 right-2 bg-gold/80 text-[10px] text-white px-2 py-0.5 rounded font-body uppercase tracking-tighter">Depois</span>
                </div>
              </div>

              {/* Instagram Interaction Bar */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <Heart className="w-6 h-6 text-foreground cursor-pointer hover:text-red-500 transition-colors" />
                    <MessageCircle className="w-6 h-6 text-foreground cursor-pointer" />
                    <Send className="w-6 h-6 text-foreground cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 text-foreground cursor-pointer" />
                </div>

                {/* Caption */}
                <div className="font-body text-sm leading-snug">
                  <p>
                    <span className="font-bold mr-2">dranataliabrainer</span>
                    {testimonials[activeIndex].text}
                  </p>
                  <p className="text-muted-foreground text-xs mt-2 italic">Paciente: {testimonials[activeIndex].patient}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? 'bg-gold w-4' : 'bg-gold/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
