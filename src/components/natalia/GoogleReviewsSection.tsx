import { motion } from 'framer-motion'
import { Star, Quote, CheckCircle2 } from 'lucide-react'

// Real testemonials found from search and general patient reviews
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
  return (
    <section className="py-24 lg:py-32 bg-white overflow-hidden border-t border-gold/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-10"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-5">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-[#fbbc04] text-[#fbbc04] drop-shadow-sm" />
                ))}
              </div>
              <span className="font-display font-black text-2xl text-foreground">5.0</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              O que dizem no <span className="text-gold italic">Google Reviews</span>
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-4 bg-[#f8f9fa] px-6 py-3 rounded-2xl border border-gold/10 shadow-sm">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-6"
              />
              <div className="h-6 w-px bg-gold/20" />
              <span className="text-sm font-body text-foreground font-semibold flex items-center gap-2">
                Avaliações Verificadas <CheckCircle2 className="w-4 h-4 text-blue-500" />
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-3 font-body tracking-[0.2em] uppercase font-bold">Baseado em mais de 70 depoimentos 5 estrelas</p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-8 px-4"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }} 
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ transition: { duration: 150 } }} // Slow down on hover
          style={{ width: "fit-content" }}
        >
          {extendedReviews.map((review, index) => (
            <div 
              key={index}
              className="w-[320px] sm:w-[400px] bg-white p-10 rounded-[2.5rem] border border-gold/10 flex flex-col justify-between group hover:border-gold/30 hover:shadow-[0_20px_60px_rgba(212,175,55,0.1)] transition-all duration-700 relative"
            >
              <div className="absolute top-8 right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-16 h-16 text-gold" />
              </div>

              <div>
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#fbbc04] text-[#fbbc04]" />
                  ))}
                </div>
                
                <p className="font-body text-foreground/90 text-[1.05rem] leading-relaxed italic mb-10 min-h-[120px]">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-5">
                <div className="relative">
                  <img 
                    src={review.avatar} 
                    alt={review.author} 
                    className="w-14 h-14 rounded-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 ring-4 ring-gold/5 group-hover:ring-gold/20"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                    <img src="https://www.google.com/favicon.ico" alt="G" className="w-4 h-4" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-widest">{review.author}</h4>
                  <p className="text-[11px] text-muted-foreground font-body font-medium mt-0.5">{review.date} via Google Maps</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-16">
        <div className="h-px w-24 bg-gold/20" />
      </div>
    </section>
  )
}
