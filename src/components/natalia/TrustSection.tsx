import { motion } from 'framer-motion'
import { Diamond, GraduationCap, Users, ShieldCheck, Star } from 'lucide-react'
import nataliaImg from '../../assets/foto-natalia-webp.webp'

export function TrustSection() {
  const credentials = [
    { icon: Diamond, text: 'Invisalign Top Doctor Diamond', pos: 'top-4 -right-6' },
    { icon: GraduationCap, text: '18+ anos de Expertise', pos: 'bottom-16 -left-8' },
    { icon: Users, text: '500+ Casos Tratados', pos: 'bottom-4 -right-4' },
  ]

  return (
    <section className="py-12 lg:py-20 bg-cream overflow-visible min-h-[85vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Professional Photo with Floating Badges */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative max-w-sm mx-auto lg:mx-0"
          >
            {/* Main Image Frame with light-themed shadow */}
            <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-[0_15px_45px_rgba(212,175,55,0.1)] bg-gold/5">
              <img 
                src={nataliaImg} 
                alt="Dra. Natalia Brainer" 
                className="w-full aspect-[4/5] object-cover transition-all duration-700 hover:scale-105" 
                loading="lazy"
                width={400}
                height={500}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-60" />
            </div>

            {/* Floating Badges with light-theme contrast */}
            {credentials.map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className={`absolute ${badge.pos} hidden sm:flex items-center gap-3 bg-white/80 backdrop-blur-xl border border-gold/30 p-3 rounded-xl shadow-xl z-30 group hover:border-gold transition-colors`}
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center text-gold group-hover:scale-110 transition-transform">
                  <badge.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <p className="text-foreground font-body text-[10px] font-bold leading-tight tracking-wide max-w-[80px]">
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
            <span className="text-gold font-body font-semibold tracking-[0.3em] uppercase text-xs mb-4 block">
              Quem está por trás das transformações
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              DRA. <span className="text-gold">NATALIA</span> BRAINER
            </h2>
            
            <div className="space-y-4 text-foreground/80 font-body text-base sm:text-lg leading-relaxed max-w-lg">
              <p>
                Por trás de cada sorriso transformado, existe técnica, ciência e arte. Com mais de <span className="text-gold font-semibold">18 anos de experiência</span> em ortodontia de alta complexidade, dedico minha carreira a criar sorrisos naturais e personalizados que devolvam a autoestima e qualidade de vida dos meus pacientes.
              </p>
              <p>
                Como <span className="text-gold font-semibold">Invisalign Top Doctor Diamond</span>, utilizo o que há de mais moderno em planejamento digital para entregar resultados previsíveis, rápidos e extremamente discretos.
              </p>
              <p>
                Meu objetivo é simples: entregar um resultado que não apenas melhore sua estética, mas que entenda sua rotina e <span className="text-foreground font-bold underline decoration-gold underline-offset-8">valorize cada detalhe do seu sorriso.</span>
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gold/20 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <Star className="text-gold w-5 h-5 fill-gold" />
                <div>
                  <p className="text-foreground font-bold text-lg leading-none">+500</p>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest mt-1">Casos Atendidos</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-gold w-5 h-5" />
                <div>
                  <p className="text-foreground font-bold text-lg leading-none">Diamond</p>
                  <p className="text-muted-foreground text-[10px] uppercase tracking-widest mt-1">Selo de Excelência</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
