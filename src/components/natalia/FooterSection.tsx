import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from 'lucide-react'

export function FooterSection() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-gold">Contato</h3>
            <ul className="space-y-4 font-body text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                Av. Dom Luís 1200 - T1 - SL1501, Fortaleza - CE
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                (85) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                contato@dranataliabrainer.com.br
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                Seg-Sex: 8h–18h | Sáb: 8h–12h
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-gold">Links</h3>
            <ul className="space-y-3 font-body text-sm text-background/70">
              <li><a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Termos de Uso</a></li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/dranataliabrainer" target="_blank" rel="noopener noreferrer" className="text-background/70 hover:text-gold transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/70 hover:text-gold transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Map placeholder */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-6 text-gold">Localização</h3>
            <div className="aspect-video rounded-lg overflow-hidden bg-background/10">
              <iframe
                title="Localização do consultório"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3!2d-38.49!3d-3.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM8KwNDMnNDguMCJTIDM4wrAyOScyNC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-sm text-background/50">
            © {new Date().getFullYear()} Dra. Natalia Brainer — Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
