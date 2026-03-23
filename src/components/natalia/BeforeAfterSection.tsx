import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Diamond } from 'lucide-react'
import avatarImg from '../../assets/logo_dra_natalia-webp.webp'
import antesImg from '../../assets/antes-hero-webp.webp'
import depoisImg from '../../assets/depois-hero-webp.webp'

const testimonials = [
  { name: 'Adelaide Marques', text: 'Transformação incrível em apenas 8 meses. Discreto e eficiente.', likes: '2.450', time: '2 d' },
  { name: 'Cláudio Ferreira', text: 'A melhor escolha para quem tem agenda cheia. Maestria Diamond!', likes: '1.820', time: '5 d' },
  { name: 'Ricardo Santos', text: 'Invisalign mudou minha segurança em reuniões. Resultado impecável.', likes: '3.100', time: '1 sem' },
  { name: 'Marcela Lima', text: 'Praticidade e elegância. Dra. Natalia é fantástica!', likes: '1.560', time: '2 sem' },
  { name: 'Beatriz Costa', text: 'Tratamento rápido e invisível. Adorei o resultado!', likes: '2.210', time: '3 sem' },
]

export function BeforeAfterSection() {
  const [current, setCurrent] = useState(0)
  const itemsPerPage = 3

  const next = () => setCurrent((prev) => Math.min(prev + 1, testimonials.length - itemsPerPage))
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0))

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 block">Galeria de Resultados</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Transformações <span className="text-gold">Reais</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.slice(current, current + itemsPerPage).map((t, i) => (
            <motion.div
              key={`${t.name}-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-border/40 max-w-md mx-auto w-full"
            >
              {/* Instagram Header */}
              <div className="flex items-center justify-between p-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full p-[1.5px] bg-gradient-to-tr from-gold-dark to-gold">
                    <img src={avatarImg} alt="Dra. Natalia" className="w-full h-full rounded-full object-cover border-2 border-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-[13px] font-bold text-foreground">dranataliabrainer</p>
                      <Diamond className="w-3 h-3 text-gold fill-gold" />
                    </div>
                    <p className="text-[11px] text-muted-foreground leading-tight">Natalia Brainer • Ortodontista</p>
                  </div>
                </div>
                <MoreHorizontal className="w-5 h-5 text-muted-foreground" />
              </div>

              {/* Patient Image (Simulated Before/After Post) */}
              <div className="relative aspect-square w-full bg-beige/10 group cursor-pointer overflow-hidden">
                <div className="absolute inset-0 grid grid-cols-2 gap-[1px] bg-white transition-transform duration-700 group-hover:scale-105">
                  <div className="relative overflow-hidden">
                    <img src={antesImg} alt="Antes" className="w-full h-full object-cover" />
                    <span className="absolute top-2 left-2 bg-black/40 text-[9px] text-white px-1.5 py-0.5 rounded font-body uppercase tracking-wider">Antes</span>
                  </div>
                  <div className="relative overflow-hidden">
                    <img src={depoisImg} alt="Depois" className="w-full h-full object-cover" />
                    <span className="absolute top-2 right-2 bg-gold/90 text-[9px] text-white px-1.5 py-0.5 rounded font-body uppercase tracking-wider font-bold">Depois</span>
                  </div>
                </div>
              </div>

              {/* Instagram Interaction Bar */}
              <div className="p-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-4">
                    <Heart className="w-6 h-6 hover:text-red-500 transition-colors cursor-pointer" />
                    <MessageCircle className="w-6 h-6 hover:opacity-70 transition-opacity cursor-pointer" />
                    <Send className="w-6 h-6 hover:opacity-70 transition-opacity cursor-pointer" />
                  </div>
                  <Bookmark className="w-6 h-6 hover:opacity-70 transition-opacity cursor-pointer" />
                </div>
                
                <p className="text-[13px] font-bold text-foreground mb-1.5">
                  {t.likes} curtidas
                </p>
                
                <div className="text-[13px] leading-relaxed">
                  <span className="font-bold mr-2">dranataliabrainer</span>
                  <span className="text-foreground/90 font-body">{t.text} Paciente: {t.name} ✨</span>
                </div>
                
                <p className="text-[11px] text-muted-foreground mt-2 uppercase tracking-tight">
                  Há {t.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            disabled={current === 0}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-gold disabled:opacity-20 transition-all cursor-pointer group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Anterior
          </button>
          
          <div className="flex gap-2">
            {[...Array(testimonials.length - itemsPerPage + 1)].map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${current === idx ? 'bg-gold w-4' : 'bg-gold/20'}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current >= testimonials.length - itemsPerPage}
            className="flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-gold disabled:opacity-20 transition-all cursor-pointer group"
          >
            Próximo
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}
