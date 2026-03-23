import { motion, useMotionValue } from 'framer-motion'
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

const reviews = [
  {
    author: 'Giselly Soares',
    text: 'Dra Natália se mostrou muito atenciosa e preocupada com o resultado que eu desejava. O tratamento fluiu conforme combinado, demonstrando comprometimento e competência.',
    date: 'há 1 mês',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    author: 'Débora Dhyellen',
    text: 'Resultado perfeito! Dra Natália é muito cuidadosa e mostrou muita propriedade durante todo o processo. Super indico ela e sua auxiliar Leda pelo carinho.',
    date: 'há 3 semanas',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    author: 'Suzy Rolim',
    text: 'Excelente profissional. Estou sendo acompanhada no tratamento com Invisalign e desde o início foi muito atenciosa e pronta a esclarecer quaisquer dúvidas.',
    date: 'há 2 meses',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    author: 'Marcilene Damasceno',
    text: 'Comecei meu tratamento há 6 meses e estou adorando o resultado. Ela é maravilhosa no que faz, super comprometida e atenciosa. Recomendo demais.',
    date: 'há 4 meses',
    avatar: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    author: 'Juliana Cavalcante',
    text: 'A atenção e o profissionalismo da Dra Natália fizeram todo o processo ser tranquilo. Fiquei surpresa com a rapidez e a precisão da evolução do Invisalign.',
    date: 'há 5 meses',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    author: 'Ricardo Mendes',
    text: 'Melhor escolha que fiz para meu sorriso. Tecnologia de ponta e uma equipe muito bem preparada. O resultado final ficou extremamente natural.',
    date: 'há 6 meses',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150'
  },
]

// Extended array for seamless looping
const extendedReviews = [...reviews, ...reviews, ...reviews]

export function GoogleReviewsSection() {
  const [isPaused, setIsPaused] = useState(false)
  const [width, setWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])

  // Auto-scroll logic that can be paused
  useEffect(() => {
    let animationFrame: number
    const animate = () => {
      if (!isPaused) {
        const currentX = x.get()
        if (currentX <= -1800) { // reset point
          x.set(0)
        } else {
          x.set(currentX - 0.5) // Speed
        }
      }
      animationFrame = requestAnimationFrame(animate)
    }
    
    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isPaused, x])

  const handleNext = () => {
    x.set(x.get() - 400)
  }

  const handlePrev = () => {
    x.set(x.get() + 400)
  }

  return (
    <section className="py-12 lg:py-16 bg-white overflow-hidden border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-left"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
              ))}
            </div>
            <span className="font-display font-black text-lg text-foreground">5.0</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
            O que dizem no <span className="text-gold italic">Google Reviews</span>
          </h2>
        </motion.div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-3 bg-[#f8f9fa] px-4 py-2 rounded-xl border border-gold/10">
            <img 
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
              alt="Google" 
              className="h-4"
            />
            <span className="text-[10px] font-body text-foreground font-bold uppercase tracking-wider">Verificadas</span>
          </div>
          
          <div className="flex gap-2">
            <button 
              onClick={handlePrev}
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button 
              onClick={handleNext}
              className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div 
        className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div 
          ref={carousel}
          style={{ x }}
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="flex gap-6 px-4"
        >
          {extendedReviews.map((review, index) => (
            <div 
              key={index}
              className="w-[280px] sm:w-[350px] bg-white p-6 sm:p-8 rounded-[2rem] border border-gold/10 flex flex-col justify-between group hover:border-gold/30 hover:shadow-[0_15px_40px_rgba(212,175,55,0.08)] transition-all duration-500 shrink-0 select-none relative"
            >
              <div className="absolute top-6 right-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-10 h-10 text-gold" />
              </div>

              <div>
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                
                <p className="font-body text-foreground/90 text-sm sm:text-[0.95rem] leading-relaxed italic mb-8 min-h-[100px] pointer-events-none">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={review.avatar} 
                    alt={review.author} 
                    className="w-12 h-12 rounded-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500 ring-4 ring-gold/5 group-hover:ring-gold/10"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <img src="https://www.google.com/favicon.ico" alt="G" className="w-3 h-3" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-xs uppercase tracking-widest">{review.author}</h4>
                  <p className="text-[10px] text-muted-foreground font-body font-medium mt-0.5">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-8">
        <p className="text-gold/60 font-body text-[10px] uppercase tracking-widest flex items-center gap-2">
          <span className="w-4 h-[1px] bg-gold/30"></span>
          Arraste para navegar • Pare para ler
          <span className="w-4 h-[1px] bg-gold/30"></span>
        </p>
      </div>
    </section>
  )
}
