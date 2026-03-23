import { motion } from 'framer-motion'
import { Heart, MessageCircle, Send, Bookmark, CheckCircle2 } from 'lucide-react'
import avatarImg from '../../assets/perfil-instagram.jpg'
import antesImg from '../../assets/antes-hero-webp.webp'
import depoisImg from '../../assets/depois-hero-webp.webp'

const testimonials = [
  {
    author: 'dranataliabrainer',
    patient: 'Adelaide Marques',
    text: 'Transformação incrível em apenas 8 meses. Discreto e eficiente. Paciente radiante! ✨',
  },
  {
    author: 'dranataliabrainer',
    patient: 'Cláudio Ferreira',
    text: 'A melhor escolha para quem tem agenda cheia. Maestria Diamond! Resultado impecável. 💎',
  },
  {
    author: 'dranataliabrainer',
    patient: 'Ricardo Santos',
    text: 'Invisalign mudou minha segurança em reuniões. Resultado totalmente invisível. 🚀',
  },
  {
    author: 'dranataliabrainer',
    patient: 'Mariana Lima',
    text: 'Conforto e previsibilidade. O planejamento digital faz toda a diferença no sorriso. 🌟',
  },
]

// To make infinite loop, we duplicate the array
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials]

export function BeforeAfterSection() {
  return (
    <section className="py-12 lg:py-16 bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-gold font-body font-semibold tracking-widest uppercase text-xs mb-3 block">Sorrisos transformados sem dor</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Veja alguns sorrisos que já transformamos
          </h2>
        </motion.div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        <motion.div 
          className="flex gap-6 px-4"
          animate={{ x: [0, -1400] }} // Adjust based on card width + gap
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "max-content" }}
        >
          {extendedTestimonials.map((item, index) => (
            <div 
              key={index}
              className="w-[320px] sm:w-[380px] bg-white rounded-xl shadow-lg border border-border flex-shrink-0"
            >
              {/* Instagram Style Header */}
              <div className="flex items-center justify-between p-3 border-b border-border/50">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full p-[1.5px] bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600">
                    <div className="w-full h-full rounded-full border-2 border-white overflow-hidden">
                      <img src={avatarImg} alt="Dra. Natalia" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="font-body text-xs font-bold text-foreground line-height-none">dranataliabrainer</span>
                      <CheckCircle2 className="w-3 h-3 text-[#0095f6] fill-[#0095f6] text-white" />
                    </div>
                    <p className="text-[10px] text-muted-foreground font-body leading-none italic">Dra Natalia Brainer</p>
                  </div>
                </div>
              </div>

              {/* Photos Grid */}
              <div className="aspect-square relative flex bg-beige/5">
                <div className="w-1/2 h-full border-r-[0.5px] border-white relative overflow-hidden group">
                  <img src={antesImg} alt="Antes" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-2 left-2 bg-black/50 text-[10px] text-white px-2 py-0.5 rounded font-body uppercase">Antes</span>
                </div>
                <div className="w-1/2 h-full border-l-[0.5px] border-white relative overflow-hidden group">
                  <img src={depoisImg} alt="Depois" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <span className="absolute top-2 right-2 bg-gold/80 text-[10px] text-white px-2 py-0.5 rounded font-body uppercase">Depois</span>
                </div>
              </div>

              {/* Instagram Interaction Bar */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3 text-foreground">
                  <div className="flex items-center gap-3">
                    <Heart className="w-5 h-5 cursor-pointer hover:text-red-500 transition-colors" />
                    <MessageCircle className="w-5 h-5 cursor-pointer" />
                    <Send className="w-5 h-5 cursor-pointer" />
                  </div>
                  <Bookmark className="w-5 h-5 cursor-pointer" />
                </div>

                {/* Caption */}
                <div className="font-body text-sm leading-snug text-foreground/90">
                  <p>
                    <span className="font-bold mr-2 text-foreground">dranataliabrainer</span>
                    {item.text}
                  </p>
                  <p className="text-muted-foreground text-[10px] mt-2 italic">Paciente: {item.patient}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
