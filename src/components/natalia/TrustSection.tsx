import { motion } from 'framer-motion'
import { Diamond, GraduationCap, Users, ShieldCheck, Star } from 'lucide-react'
import nataliaImg from '../../assets/foto-natalia-webp.webp'

export function TrustSection() {
  const credentials = [
    { icon: Diamond, text: 'Invisalign Top Doctor Diamond', pos: 'top-6 -right-8' },
    { icon: GraduationCap, text: '18+ anos de Expertise', pos: 'bottom-20 -left-10' },
    { icon: Users, text: '500+ Casos Tratados', pos: 'bottom-6 -right-6' },
  ]

  return (
    <section className="py-24 lg:py-40 bg-black overflow-visible">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Professional Photo with Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-md mx-auto lg:mx-0"
          >
            {/* Main Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.15)] bg-gold/5">
              <img 
                src={nataliaImg} 
                alt="Dra. Natalia Brainer" 
                className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Badges */}
            {credentials.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className={`absolute ${badge.pos} hidden sm:flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 p-4 rounded-xl shadow-2xl z-30 group hover:border-gold/50 transition-colors`}
              >
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <badge.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <p className="text-white font-body text-xs font-bold leading-tight tracking-wide max-w-[100px]">
                  {badge.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-left"
          >
            <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 block">
              Quem está por trás das transformações
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              DRA. NATALIA BRAINER
            </h2>
            
            <div className="space-y-6 text-white/80 font-body text-lg leading-relaxed max-w-xl">
              <p>
                Por trás de cada sorriso transformado, existe técnica, ciência e arte. Com mais de <span className="text-gold font-semibold">18 anos de experiência</span> em ortodontia de alta complexidade, dedico minha carreira a criar sorrisos naturais e personalizados que devolvam a autoestima e qualidade de vida dos meus pacientes.
              </p>
              <p>
                Como <span className="text-gold font-semibold">Invisalign Top Doctor Diamond</span>, utilizo o que há de mais moderno em planejamento digital para entregar resultados previsíveis, rápidos e extremamente discretos.
              </p>
              <p>
                Meu objetivo é simples: entregar um resultado que não apenas melhore sua estética, mas que entenda sua rotina e <span className="text-white font-bold underline decoration-gold underline-offset-8">valorize cada detalhe do seu sorriso.</span>
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <Star className="text-gold w-6 h-6 fill-gold" />
                <div>
                  <p className="text-white font-bold text-xl leading-none">+500</p>
                  <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Casos Atendidos</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <ShieldCheck className="text-gold w-6 h-6" />
                <div>
                  <p className="text-white font-bold text-xl leading-none">Diamond</p>
                  <p className="text-white/50 text-xs uppercase tracking-widest mt-1">Selo de Excelência</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
