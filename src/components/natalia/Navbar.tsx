import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'
import logoImg from '../../assets/logo.webp'
import { trackClick } from '../../lib/analytics'

const links = [
  { label: 'Vantagens', href: '#vantagens' },
  { label: 'Resultados', href: '#resultados' },
  { label: 'Processo', href: '#processo' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const whatsappUrl = "https://tintim.link/whatsapp/9634acf3-f59c-4f54-bff8-b2999aeab15c/bddc9850-a67d-4483-9d46-7723f5351099"

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 200)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <motion.nav
      initial={false}
      animate={{ 
        opacity: isScrolled ? 1 : 0,
        y: isScrolled ? 0 : -80
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gold/10 pointer-events-auto"
      style={{ pointerEvents: isScrolled ? 'auto' : 'none' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoImg} alt="Dra. Natalia Brainer" className="h-10 md:h-12 w-auto object-contain" />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-body text-[13px] uppercase tracking-widest font-bold text-foreground/70 hover:text-gold transition-colors">
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackClick}
            className="btn-gold !text-white text-[11px] px-6 py-2.5 rounded-full font-bold uppercase tracking-[0.15em] shadow-[0_8px_20px_rgba(212,175,55,0.2)] transition-all"
          >
            Quero Agendar Minha Consulta
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 cursor-pointer text-gold" aria-label="Menu">
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t border-gold/10 p-8 space-y-6 shadow-2xl"
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block font-body text-lg font-bold text-foreground/80 hover:text-gold tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => { setMobileOpen(false); trackClick(); }}
            className="block btn-gold text-center py-4 rounded-full !text-white font-bold uppercase tracking-widest text-sm shadow-xl"
          >
            Quero Agendar Minha Consulta
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
