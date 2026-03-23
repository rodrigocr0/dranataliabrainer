import { motion } from 'framer-motion'
import { Check, X, Sparkles, Clock, UserCheck, ShieldCheck, Zap } from 'lucide-react'

const comparisons = [
  {
    label: 'Estética Visual',
    invisalign: 'Praticamente invisível, discreto em qualquer ambiente.',
    metalico: 'Visível e impactante na imagem pessoal.',
    icon: Sparkles
  },
  {
    label: 'Conforto & Higiene',
    invisalign: 'Removível para comer e escovar. Sem metais ou pontas.',
    metalico: 'Fixo 24h. Dificulta a higiene e pode causar lesões.',
    icon: ShieldCheck
  },
  {
    label: 'Liberdade Alimentar',
    invisalign: 'Sem restrições. Você tira o alinhador e come o que quiser.',
    metalico: 'Restrito. Evitar alimentos duros ou pegajosos.',
    icon: Zap
  },
  {
    label: 'Tempo de Tratamento',
    invisalign: 'Até 2x mais rápido com planejamento digital.',
    metalico: 'Tratamentos mais longos e visitas frequentes.',
    icon: Clock
  },
  {
    label: 'Vida Profissional',
    invisalign: 'Maestria na imagem. Confiança total em reuniões.',
    metalico: 'Pode gerar insegurança ao sorrir e falar em público.',
    icon: UserCheck
  }
]

export function ComparisonSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream/50 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold font-body font-semibold tracking-widest uppercase text-xs mb-3 block">Decisão Inteligente</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Invisalign vs. Aparelho Metálico
          </h2>
          <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Compare e descubra por que os alinhadores transparentes são a escolha número um de executivos e profissionais que não abrem mão da excelência.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Header Row (Desktop Only) */}
          <div className="hidden lg:grid grid-cols-[1fr_2fr_2fr] gap-8 mb-8 px-6 text-center items-center">
            <div className="text-left font-display text-lg font-bold text-foreground">Critério</div>
            <div className="relative py-4 px-6 bg-white rounded-t-2xl border-x border-t border-gold/20 shadow-[0_-10px_30px_rgba(212,175,55,0.05)]">
              <span className="text-gold font-display text-2xl font-black italic tracking-tight">Invisalign</span>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">
                Escolha Prime
              </div>
            </div>
            <div className="relative py-4 px-6 bg-white/50 rounded-t-2xl border-x border-t border-muted/30">
              <span className="text-muted-foreground font-display text-xl font-medium">Aparelho Fixo</span>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="space-y-6 lg:space-y-4">
            {comparisons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_2fr] gap-4 lg:gap-8 items-stretch group"
              >
                {/* Row Label (Mobile + Desktop) */}
                <div className="flex items-center gap-3 lg:gap-4 p-4 lg:p-6 bg-white/40 lg:bg-transparent rounded-xl self-center">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center text-gold shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-display font-bold text-foreground lg:text-lg">{item.label}</span>
                </div>

                {/* Invisalign Value Card */}
                <div className="relative p-6 bg-white border border-gold/10 rounded-2xl shadow-sm ring-1 ring-gold/5 transition-all group-hover:ring-gold/20">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center shrink-0 mt-1">
                      <Check className="w-3 h-3 text-gold" />
                    </div>
                    <span className="font-body text-foreground leading-relaxed">
                      {item.invisalign}
                    </span>
                  </div>
                  {/* Badge Label */}
                  <div className="absolute -top-2 right-4 bg-gold text-white text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
                    Invisalign
                  </div>
                </div>

                {/* Metal Value Card (Matching Style but Muted) */}
                <div className="relative p-6 bg-white/50 border border-muted/20 rounded-2xl shadow-sm ring-1 ring-muted/10 opacity-70 transition-all hover:opacity-90">
                  <div className="flex items-start gap-4">
                    <div className="w-5 h-5 rounded-full bg-muted/20 flex items-center justify-center shrink-0 mt-1 text-muted-foreground">
                      <X className="w-3 h-3" />
                    </div>
                    <span className="font-body text-muted-foreground leading-relaxed">
                      {item.metalico}
                    </span>
                  </div>
                  {/* Badge Label */}
                  <div className="absolute -top-2.5 right-4 bg-[#6b6b6b] text-white text-[9px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm z-20">
                    Aparelho Metálico
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer Accent */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-16 text-center"
          >
            <p className="font-display italic text-gold text-xl sm:text-2xl font-medium tracking-tight">
              A elegância mora nos detalhes que ninguém vê.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
