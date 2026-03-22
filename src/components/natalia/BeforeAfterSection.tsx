import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react'

const testimonials = [
  { name: 'Marina', profession: 'Advogada', text: 'Fiz o tratamento em 10 meses e ninguém percebeu. Meu sorriso mudou minha confiança nas reuniões.' },
  { name: 'Carla', profession: 'Executiva', text: 'A discrição do Invisalign foi perfeita para minha rotina de trabalho. Resultado incrível!' },
  { name: 'Fernanda', profession: 'Empresária', text: 'Sempre quis corrigir meu sorriso mas não queria aparelho. O Invisalign foi a melhor decisão.' },
  { name: 'Juliana', profession: 'Médica', text: 'Tratamento rápido e sem interferir na minha vida profissional. Recomendo a todas.' },
  { name: 'Patrícia', profession: 'Arquiteta', text: 'Meu sorriso abriu portas profissionais que eu nem imaginava. Obrigada, Dra. Natalia!' },
  { name: 'Luciana', profession: 'Engenheira', text: 'O planejamento digital me deu confiança no resultado. Ficou melhor do que eu esperava.' },
]

export function BeforeAfterSection() {
  const [current, setCurrent] = useState(0)
  const itemsPerPage = 3

  const next = () => setCurrent((prev) => Math.min(prev + 1, testimonials.length - itemsPerPage))
  const prev = () => setCurrent((prev) => Math.max(prev - 1, 0))

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
            Transformações <span className="text-gold">Reais</span> de Pacientes
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {testimonials.slice(current, current + itemsPerPage).map((t, i) => (
            <motion.div
              key={`${t.name}-${current}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-background rounded-xl overflow-hidden shadow-md"
            >
              {/* Before/After placeholder */}
              <div className="aspect-[4/3] bg-gradient-to-br from-beige-dark to-beige flex items-center justify-center">
                <div className="flex gap-1 text-sm font-body text-muted-foreground">
                  <span className="px-3 py-1 bg-background/80 rounded">Antes</span>
                  <span className="px-3 py-1 bg-gold/20 rounded text-gold-dark">Depois</span>
                </div>
              </div>
              <div className="p-5">
                <p className="font-body text-foreground italic mb-3">"{t.text}"</p>
                <p className="font-body text-sm text-gold-dark font-semibold">{t.name}, {t.profession}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-2 rounded-full border border-border hover:bg-background disabled:opacity-30 transition-colors cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            disabled={current >= testimonials.length - itemsPerPage}
            className="p-2 rounded-full border border-border hover:bg-background disabled:opacity-30 transition-colors cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Instagram link */}
        <div className="text-center mt-8">
          <a
            href="https://instagram.com/dranataliabrainer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-gold-dark hover:text-gold font-semibold transition-colors"
          >
            <Instagram className="w-5 h-5" />
            Ver mais casos no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
