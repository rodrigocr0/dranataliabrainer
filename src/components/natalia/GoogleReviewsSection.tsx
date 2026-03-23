import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    author: 'Mariana Silva',
    text: 'A Dra. Natalia é sensacional! Fiz meu tratamento com Invisalign e o resultado superou todas as expectativas. Consultório impecável e atendimento de primeira nível elite.',
    date: 'há 2 meses',
  },
  {
    author: 'Ricardo Andrade',
    text: 'Experiência incrível. Especialista Diamond de verdade, domina a tecnologia e passa muita segurança. Recomendo muito para quem quer transformar o sorriso com discrição.',
    date: 'há 4 meses',
  },
  {
    author: 'Camila Lemos',
    text: 'Melhor ortodontista de Fortaleza! O Invisalign mudou minha vida e a Dra. Natalia conduziu tudo com maestria. Equipe extremamente atenciosa e profissional.',
    date: 'há 1 mês',
  },
  {
    author: 'Bruno Martins',
    text: 'Profissionalismo e competência resumem. O planejamento digital é surpreendente, você vê tudo antes de começar. O sorriso ficou perfeitamente alinhado.',
    date: 'há 3 meses',
  },
  {
    author: 'Fernanda Oliveira',
    text: 'Atenção aos detalhes e carinho com o paciente. O tratamento foi mais rápido do que imaginei e totalmente confortável. Vale cada centavo do investimento.',
    date: 'há 5 meses',
  },
  {
    author: 'João Pedro',
    text: 'Atendimento nota mil. A tecnologia Invisalign aliada à expertise da Dra. Natalia faz toda a diferença. Sensação de estar nas melhores mãos possíveis.',
    date: 'há 2 semanas',
  },
]

// Extended array for seamless looping
const extendedReviews = [...reviews, ...reviews, ...reviews]

export function GoogleReviewsSection() {
  return (
    <section className="py-20 lg:py-24 bg-white overflow-hidden border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#fbbc04] text-[#fbbc04]" />
                ))}
              </div>
              <span className="font-body font-bold text-foreground">5.0</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
              O que dizem no <span className="text-gold">Google</span>
            </h2>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center gap-3 bg-[#f8f9fa] px-4 py-2 rounded-lg border border-border/50">
              <img 
                src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" 
                alt="Google" 
                className="h-5"
              />
              <span className="text-sm font-body text-muted-foreground font-medium">Avaliações Verificadas</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 font-body tracking-wider uppercase">Mais de 100 avaliações 5 estrelas</p>
          </div>
        </motion.div>
      </div>

      {/* Infinite Horizontal Carousel */}
      <div className="relative w-full overflow-hidden py-4">
        <motion.div 
          className="flex gap-6 px-4"
          animate={{ x: [0, -1800] }} 
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          whileHover={{ transition: { duration: 100 } }} // Slow down on hover
          style={{ width: "max-content" }}
        >
          {extendedReviews.map((review, index) => (
            <div 
              key={index}
              className="w-[300px] sm:w-[350px] bg-[#f8f9fa] p-8 rounded-2xl border border-border/50 flex flex-col justify-between group hover:border-gold/20 hover:shadow-xl transition-all duration-500"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#fbbc04] text-[#fbbc04]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-gold/20 group-hover:text-gold/40 transition-colors" />
                </div>
                <p className="font-body text-foreground/80 leading-relaxed italic mb-8 h-24 overflow-hidden line-clamp-4">
                  "{review.text}"
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold font-display text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground text-sm uppercase tracking-wide">{review.author}</h4>
                  <p className="text-[10px] text-muted-foreground font-body">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex justify-center mt-12">
        <p className="text-gold/60 font-body text-[10px] uppercase tracking-[0.3em] flex items-center gap-2">
          <span className="w-4 h-[1px] bg-gold/30"></span>
          Transparência Total • Credibilidade Diamond
          <span className="w-4 h-[1px] bg-gold/30"></span>
        </p>
      </div>
    </section>
  )
}
