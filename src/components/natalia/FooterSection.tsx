import { motion } from 'framer-motion'
import { Instagram, MapPin, MessageSquare } from 'lucide-react'
import logoImg from '../../assets/logo_dra_natalia-webp.webp'
import bgImage from '../../assets/secao-rodape.webp'
import { trackClick } from '../../lib/analytics'

export function FooterSection() {
  const currentYear = new Date().getFullYear()
  const whatsappUrl = "https://tintim.link/whatsapp/9634acf3-f59c-4f54-bff8-b2999aeab15c/bddc9850-a67d-4483-9d46-7723f5351099"
  const instagramUrl = "https://www.instagram.com/dranataliabrainer"

  return (
    <footer className="relative bg-[#080808] text-white pt-24 pb-12 overflow-hidden">
      {/* Background Image with Deep Overlay for Legibility */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Consultório" 
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#080808]/90 to-[#080808]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 mb-20">
          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <span className="text-gold font-body font-semibold tracking-[0.4em] uppercase text-[10px] mb-4 block">
              Agendamento
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-medium mb-8 tracking-tight">
              Entre em <span className="text-gold italic">contato</span>
            </h2>
            <p className="font-body text-white/50 text-base sm:text-lg mb-12 max-w-sm leading-relaxed">
              Dê o próximo passo para transformar seu sorriso com a excelência que sua imagem merece.
            </p>

            <div className="space-y-6">
              {/* WhatsApp Row */}
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackClick}
                className="group flex items-center gap-5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:text-gold group-hover:border-gold/30 transition-all shadow-sm">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-medium group-hover:text-gold transition-colors">(85) 98899-1505</h4>
                  <p className="text-[11px] font-body text-white/30 uppercase tracking-widest">Agendar via WhatsApp</p>
                </div>
              </a>

              {/* Instagram Row */}
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/70 group-hover:text-gold group-hover:border-gold/30 transition-all shadow-sm">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-lg sm:text-xl font-medium group-hover:text-gold transition-colors">@dranataliabrainer</h4>
                  <p className="text-[11px] font-body text-white/30 uppercase tracking-widest">Siga no Instagram</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Location Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            {/* Map Container - More delicate frame */}
            <div className="w-full aspect-video rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl mb-10 group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.350868843936!2d-38.4912344!3d-3.7335624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c748729359e9c7%3A0x6e268955219e9314!2sAv.%20Dom%20Lu%C3%ADs%2C%201200%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060160-230!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr" 
                className="w-full h-full border-0 contrast-[1.1] saturate-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 rounded-full bg-gold/5 flex items-center justify-center text-gold shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-medium text-lg mb-1 tracking-tight">Pátio Dom Luís - Torre Business l Sl 1501</h4>
                <p className="font-body text-white/40 leading-relaxed text-sm">
                  Av. Dom Luís, 1200 - sala 1501 - Meireles,<br />
                  Fortaleza - CE, 60160-230
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - Minimalist and Feminine */}
        <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={logoImg} 
              alt="Dra. Natalia Brainer" 
              className="h-9 w-auto object-contain opacity-90" 
              loading="lazy"
            />
            <p className="font-body text-[9px] text-white/20 uppercase tracking-[0.25em]">
              Copyright &copy; {currentYear} — Dra. Natalia Brainer. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-8 text-white/30 font-body text-[10px] uppercase tracking-widest">
              <span>Termos de Uso</span>
              <span>Política de Privacidade</span>
            </div>
            <a 
              href="https://www.instagram.com/digo.carneiro/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-body text-[10px] uppercase tracking-[0.2em] text-white/20 hover:text-gold transition-colors"
            >
              Desenvolvido por <span className="font-bold">Digo Carneiro</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
