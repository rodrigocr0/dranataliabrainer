import { motion } from 'framer-motion'
import { Clock, Brain, ShieldCheck } from 'lucide-react'
import bgImg from '../../assets/secao-porque-webp.webp'

const cards = [
  {
    icon: Clock,
    title: 'Quem valoriza o próprio tempo',
    description: 'Busca um tratamento discreto, que se encaixe na rotina e permita seguir o dia a dia com leveza.',
  },
  {
    icon: Brain,
    title: 'Quem escolhe com consciência',
    description: 'Prefere decisões bem planejadas e entende que investir com segurança faz toda a diferença no resultado.',
  },
  {
    icon: ShieldCheck,
    title: 'Quem não abre mão de qualidade',
    description: 'Valoriza um acompanhamento criterioso, com a experiência de uma Invisalign Top Doctor Diamond, em busca de previsibilidade e excelência.',
  },
]

export function ProblemSection() {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-black">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="absolute inset-0 bg-black/75 z-10" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 drop-shadow-lg">
            Quem escolhe o <span className="text-gold">Invisalign</span>?
          </h2>
          <p className="font-body text-lg sm:text-xl text-white/80 max-w-2xl mx-auto drop-shadow-md">
            O tratamento preferido por quem não abre mão da excelência e da autoridade.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="group text-center p-8 lg:p-10 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-gold/30 transition-all duration-500 shadow-2xl"
            >
              <div className="w-16 h-16 mx-auto mb-8 rounded-full bg-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <card.icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl font-semibold text-white mb-4">{card.title}</h3>
              <p className="font-body text-white/70 leading-relaxed text-sm sm:text-base">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
