import { motion } from 'framer-motion'
import { Instagram, MapPin, Phone, MessageSquare } from 'lucide-react'
import logoImg from '../../assets/logo_dra_natalia-webp.webp'

export function FooterSection() {
  const currentYear = new Date().getFullYear()
  const whatsappUrl = "https://api.whatsapp.com/send?phone=5585988991505"
  const instagramUrl = "https://www.instagram.com/dranataliabrainer"

  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-20">
          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-body font-bold tracking-[0.3em] uppercase text-xs mb-4 block">
              Agendamento
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
              Entre em contato
            </h2>
            <p className="font-body text-white/60 text-lg mb-10 max-w-md leading-relaxed">
              Agora que você já viu como podemos transformar o seu sorriso, <span className="text-gold font-bold italic">dê o próximo passo</span>.
            </p>

            <div className="space-y-4">
              {/* WhatsApp Box */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:text-gold transition-colors shadow-inner">
                  <MessageSquare className="w-6 h-6 border-gold/0" />
                </div>
                <div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold">(85) 98899-1505</h4>
                  <p className="text-sm font-body text-white/40 group-hover:text-white/60">Clique para agendar pelo WhatsApp</p>
                </div>
              </a>

              {/* Instagram Box */}
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-6 p-6 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-gold/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:text-gold transition-colors shadow-inner">
                  <Instagram className="w-6 h-6 border-gold/0" />
                </div>
                <div>
                  <h4 className="font-display text-xl sm:text-2xl font-bold">@dranataliabrainer</h4>
                  <p className="text-sm font-body text-white/40 group-hover:text-white/60">Acompanhe-me no Instagram</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Location Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Map Placeholder/Image */}
            <div className="w-full aspect-[16/9] rounded-[2rem] overflow-hidden border border-white/10 grayscale-[100%] hover:grayscale-0 transition-all duration-700 shadow-2xl mb-8 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.350868843936!2d-38.4912344!3d-3.7335624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748729359e9c7%3A0x6e268955219e9314!2sAv.%20Dom%20Lu%C3%ADs%2C%201200%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060160-230!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold shrink-0 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg mb-1">Localização: Torre Business</h4>
                <p className="font-body text-white/60 leading-relaxed text-sm">
                  Av. Dom Luís, 1200 - sala 1501 - Meireles,<br />
                  Fortaleza - CE, 60160-230
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logoImg} alt="Dra. Natalia Brainer" className="h-10 hover:opacity-80 transition-opacity" />
            <p className="font-body text-[10px] text-white/30 uppercase tracking-[0.2em]">
              Copyright @{currentYear} — Todos os direitos reservados à Dra. Natalia Brainer.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 opacity-40 hover:opacity-100 transition-opacity">
            <a href="#" className="font-body text-[11px] uppercase tracking-widest hover:text-gold transition-colors">Termos de Uso</a>
            <a href="#" className="font-body text-[11px] uppercase tracking-widest hover:text-gold transition-colors">Política de Privacidade</a>
            <a 
              href="https://wa.me/5585988991505" 
              target="_blank" 
              className="font-body text-[11px] uppercase tracking-widest hover:text-gold transition-colors"
            >
              Desenvolvido por DannyHana
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
