import { motion } from 'framer-motion'
import { Scan, Monitor, Smile, PartyPopper } from 'lucide-react'
import bgImage from '../../assets/secao-processo.webp'

const steps = [
  {
    icon: Scan,
    step: 'Passo 1',
    title: 'Consulta Inicial',
    description: 'Avaliação 3D de alta precisão do seu sorriso.',
  },
  {
    icon: Monitor,
    step: 'Passo 2',
    title: 'Planejamento Digital',
    description: 'Visualize o seu resultado final antes mesmo de começar.',
  },
  {
    icon: Smile,
    step: 'Passo 3',
    title: 'Tratamento',
    description: 'Use os alinhadores discretos conforme recomendado.',
  },
  {
    icon: PartyPopper,
    step: 'Passo 4',
    title: 'Resultado',
    description: 'Um novo sorriso: profissional, harmônico e confiante.',
  },
]

export function ProcessSection() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-cream">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Tratamento Invisalign" 
          className="w-full h-full object-cover opacity-10 grayscale"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Como funciona o <span className="text-gold italic">tratamento?</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground uppercase tracking-[0.2em]">
            6 a 18 meses, dependendo do seu caso
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Connector (Desktop Only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[50px] left-[60%] w-[80%] h-[1px] bg-gradient-to-r from-gold/30 via-gold/10 to-transparent z-0" />
              )}

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-8 border border-gold/10 relative z-10 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-gold/10">
                <item.icon className="w-10 h-10 text-gold" />
                <div className="absolute inset-0 rounded-full border-2 border-gold/5 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-125" />
              </div>

              {/* Step Label */}
              <span className="text-gold font-body font-bold text-[10px] uppercase tracking-[0.3em] mb-3 block">
                {item.step}
              </span>

              {/* Title & Description */}
              <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm sm:text-base text-muted-foreground max-w-[200px] leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
