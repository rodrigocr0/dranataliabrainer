import { motion } from 'framer-motion'
import { Eye, Clock, Sparkles } from 'lucide-react'

const cards = [
  {
    icon: Eye,
    title: 'Discrição Absoluta',
    description: 'Mantenha sua autoridade intacta em reuniões e apresentações. O Invisalign é virtualmente imperceptível, eliminando o estigma dos aparelhos metálicos no ambiente corporativo.',
  },
  {
    icon: Clock,
    title: 'Agenda Corporativa',
    description: 'Menos tempo no dentista, mais tempo na sua empresa. Consultas espaçadas a cada 6-8 semanas, ideais para rotinas intensas e viagens de negócios.',
  },
  {
    icon: Sparkles,
    title: 'Maestria Diamond',
    description: 'Transformação planejada por uma Invisalign Top Doctor Diamond. Previsibilidade digital que garante um sorriso impecável com o mínimo de intervenções.',
  },
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que executivas escolhem{' '}
            <span className="text-gold">Invisalign</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            A escolha inteligente para quem valoriza imagem e resultado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center p-8 lg:p-10 rounded-xl bg-cream border border-beige-dark hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
                <card.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-3">{card.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
