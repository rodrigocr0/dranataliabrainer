import { motion } from 'framer-motion'
import { Diamond, Award, Users, ShieldCheck, GraduationCap } from 'lucide-react'

const items = [
  { icon: Diamond, label: 'Invisalign Top Doctor Diamond', desc: 'Nível máximo de certificação e excelência internacional' },
  { icon: GraduationCap, label: '+18 anos de expertise', desc: 'Sólida experiência em ortodontia de alta complexidade' },
  { icon: Users, label: '+500 casos tratados', desc: 'Referência em transformações de sorrisos em Fortaleza' },
  { icon: Award, label: 'Tecnologia iTero', desc: 'Escaneamento 3D rápido para máxima previsibilidade' },
  { icon: ShieldCheck, label: 'Atendimento Concierge', desc: 'Foco total no conforto do paciente executivo' },
]

export function TrustSection() {
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
            Por que confiar na{' '}
            <span className="text-gold">Dra. Natalia</span>?
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-background border border-border hover:border-gold/30 transition-colors"
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="font-body text-xs text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
