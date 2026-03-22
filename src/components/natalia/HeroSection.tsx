import { motion } from 'framer-motion'
import { Diamond } from 'lucide-react'

export function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-background to-beige overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full border border-gold" />
        <div className="absolute bottom-40 right-40 w-96 h-96 rounded-full border border-gold" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-8"
            >
              <Diamond className="w-4 h-4 text-gold" />
              <span className="text-sm font-body font-semibold text-gold-dark tracking-wide">
                Invisalign Top Doctor Diamond
              </span>
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-foreground mb-6">
              Sorriso Profissional.{' '}
              <span className="text-gold">Sem Aparelho Metálico.</span>
            </h1>

            <p className="font-body text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Invisalign para executivas e profissionais que não abrem mão de qualidade.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={scrollToContact}
              className="btn-gold text-lg px-10 py-4 rounded-lg cursor-pointer font-body"
            >
              Agende sua Avaliação Gratuita
            </motion.button>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-72 h-96 sm:w-80 sm:h-[28rem] lg:w-96 lg:h-[32rem] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-beige to-beige-dark flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gold/20 flex items-center justify-center">
                    <Diamond className="w-10 h-10 text-gold" />
                  </div>
                  <p className="font-display text-xl font-semibold text-foreground">Dra. Natalia Brainer</p>
                  <p className="font-body text-sm text-muted-foreground mt-2">Foto profissional aqui</p>
                </div>
              </div>
              {/* Gold accent border */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-dark via-gold to-gold-light" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
