import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const criteria = [
  { label: 'Estética', invisalign: 'Praticamente invisível', metalico: 'Visível — fios e brackets metálicos', win: true },
  { label: 'Conforto', invisalign: 'Liso, sem fios cortantes', metalico: 'Pode causar feridas na boca', win: true },
  { label: 'Tempo de tratamento', invisalign: '6 a 18 meses', metalico: '18 a 36 meses', win: true },
  { label: 'Preço', invisalign: 'Investimento premium', metalico: 'Mais acessível', win: false },
  { label: 'Vida profissional', invisalign: 'Zero impacto na imagem', metalico: 'Pode afetar a autoconfiança', win: true },
]

export function ComparisonSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Invisalign vs. Aparelho Metálico
          </h2>
          <p className="font-body text-lg text-muted-foreground">Qual é a diferença?</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full font-body">
            <thead>
              <tr className="border-b-2 border-gold/30">
                <th className="text-left py-4 px-4 font-display text-lg font-semibold text-foreground">Critério</th>
                <th className="text-center py-4 px-4 font-display text-lg font-semibold text-gold">Invisalign</th>
                <th className="text-center py-4 px-4 font-display text-lg font-semibold text-muted-foreground">Aparelho Metálico</th>
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, i) => (
                <tr key={c.label} className={`border-b border-border ${i % 2 === 0 ? 'bg-cream' : ''}`}>
                  <td className="py-4 px-4 font-semibold text-foreground">{c.label}</td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {c.win && <Check className="w-4 h-4 text-gold flex-shrink-0" />}
                      <span className={c.win ? 'text-foreground' : 'text-muted-foreground'}>{c.invisalign}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <div className="flex items-center justify-center gap-2">
                      {c.win && <X className="w-4 h-4 text-destructive/50 flex-shrink-0" />}
                      <span className="text-muted-foreground">{c.metalico}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  )
}
