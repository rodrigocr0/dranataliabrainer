import { motion } from 'framer-motion'
import { HelpCircle, ChevronRight } from 'lucide-react'

const faqs = [
  {
    q: 'Quanto custa o Invisalign?',
    a: 'O investimento varia dependendo da complexidade do caso. Oferecemos parcelamento no cartão em até 21x e no boleto em até 24x. Agende uma consulta para um orçamento detalhado.',
  },
  {
    q: 'Quanto tempo leva o tratamento?',
    a: 'A maioria dos casos leva de 6 a 18 meses. Na sua Consulta Inicial, você receberá uma simulação digital 3D com a estimativa exata do tempo de tratamento.',
  },
  {
    q: 'Aparece o alinhador quando estou falando?',
    a: 'Os alinhadores são feitos com o material SmartTrack, patenteado pela Invisalign, sendo praticamente invisíveis. Em reuniões, apresentações ou fotos, ninguém percebe que você está em tratamento.',
  },
  {
    q: 'Preciso tirar para comer?',
    a: 'Sim, e essa é a maior liberdade do Invisalign! Você remove para comer e escovar os dentes, mantendo sua rotina alimentar e higiene impecáveis, sem o incômodo de fios metálicos.',
  },
  {
    q: 'O tratamento causa dor?',
    a: 'Você sentirá uma leve pressão nos primeiros dias de cada novo estágio, o que indica que os dentes estão se movendo. É incomparavelmente mais confortável que os aparelhos tradicionais.',
  },
  {
    q: 'Vocês aceitam convênio ou parcelamento?',
    a: 'Oferecemos parcelamento no cartão de crédito em até 21x (Visa ou Master) e em 18x para qualquer bandeira. Também parcelamos no boleto em até 24x. Só atendemos pelo particular.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 lg:py-32 bg-cream/30 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-gold font-body font-semibold tracking-widest uppercase text-xs mb-4 block">Esclareça suas dúvidas</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            Dúvidas <span className="text-gold italic">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto rounded-full mt-6 opacity-30" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-gold/5 flex flex-col group hover:border-gold/20 hover:shadow-[0_15px_50px_rgba(212,175,55,0.08)] transition-all duration-500"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0 group-hover:bg-gold group-hover:text-white transition-colors duration-500">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground leading-tight group-hover:text-gold transition-colors duration-300">
                  {faq.q}
                </h3>
              </div>
              
              <div className="flex flex-col flex-grow">
                <p className="font-body text-muted-foreground text-base sm:text-lg leading-relaxed mb-6">
                  {faq.a}
                </p>
                <a 
                  href="https://tintim.link/whatsapp/9634acf3-f59c-4f54-bff8-b2999aeab15c/bddc9850-a67d-4483-9d46-7723f5351099"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-gold font-body text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:gap-3"
                >
                  Saiba mais <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="font-body text-muted-foreground text-lg mb-8">
            Ainda tem alguma dúvida específica sobre o seu caso?
          </p>
          <a 
            href="https://tintim.link/whatsapp/9634acf3-f59c-4f54-bff8-b2999aeab15c/bddc9850-a67d-4483-9d46-7723f5351099"
            target="_blank"
            className="inline-flex items-center gap-2 text-gold font-display font-bold text-xl hover:gap-4 transition-all"
          >
            Falar diretamente com um especialista <ChevronRight className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
