import { motion } from 'framer-motion'
import { ScanFace, MonitorSmartphone, SmilePlus, PartyPopper } from 'lucide-react'

const steps = [
  { icon: ScanFace, title: 'Consulta Gratuita', desc: 'Avaliação 3D do seu sorriso' },
  { icon: MonitorSmartphone, title: 'Planejamento Digital', desc: 'Veja o resultado final antes de começar' },
  { icon: SmilePlus, title: 'Tratamento', desc: 'Use os alinhadores conforme recomendado' },
  { icon: PartyPopper, title: 'Resultado', desc: 'Sorriso profissional e confiante' },
]

export function ProcessSection() {
  return (
    <section className="py-20 lg:py-28 bg-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como funciona o <span className="text-gold">tratamento</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground">6 a 18 meses, dependendo do seu caso</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative z-10 w-24 h-24 mx-auto mb-6 rounded-full bg-background border-2 border-gold/30 flex items-center justify-center shadow-md">
                  <step.icon className="w-10 h-10 text-gold" strokeWidth={1.5} />
                </div>

                {/* Vertical connector - mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute left-1/2 -translate-x-1/2 top-24 w-0.5 h-8 bg-gold/20" />
                )}

                <span className="inline-block font-body text-xs font-semibold text-gold-dark tracking-widest uppercase mb-2">
                  Passo {i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
