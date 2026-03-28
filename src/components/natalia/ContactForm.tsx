import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { trackClick } from '../../lib/analytics'

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [form, setForm] = useState({
    nome: '',
    email: '',
    telefone: '',
    tipo: 'Invisalign',
    mensagem: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.nome.trim() || !form.email.trim() || !form.telefone.trim()) {
      toast({ title: 'Preencha todos os campos obrigatórios', variant: 'destructive' })
      return
    }

    setIsLoading(true)

    // Build WhatsApp message
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}.\nEmail: ${form.email}\nTelefone: ${form.telefone}\nInteresse: ${form.tipo}\n${form.mensagem ? 'Mensagem: ' + form.mensagem : ''}`
    )
    const whatsappUrl = `https://tintim.link/whatsapp/9634acf3-f59c-4f54-bff8-b2999aeab15c/bddc9850-a67d-4483-9d46-7723f5351099`

    // Simulate form submission delay
    setTimeout(() => {
      setIsLoading(false)
      toast({ title: 'Mensagem enviada!', description: 'Redirecionando para o WhatsApp...' })
      trackClick()
      window.open(whatsappUrl, '_blank')
    }, 800)
  }

  return (
    <section id="contato" className="py-20 lg:py-28 bg-gradient-to-b from-background to-beige">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Pronto para transformar seu <span className="text-gold">sorriso</span>?
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Vagas limitadas para avaliação gratuita este mês.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-background border border-border rounded-2xl p-8 shadow-lg space-y-5"
        >
          <div>
            <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Nome *</label>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              maxLength={100}
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Email *</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                maxLength={255}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
              />
            </div>
            <div>
              <label className="block font-body text-sm font-semibold text-foreground mb-1.5">WhatsApp *</label>
              <input
                name="telefone"
                type="tel"
                value={form.telefone}
                onChange={handleChange}
                required
                maxLength={20}
                placeholder="(85) 99999-9999"
                className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition"
              />
            </div>
          </div>
          <div>
            <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Tratamento desejado</label>
            <select
              name="tipo"
              value={form.tipo}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition cursor-pointer"
            >
              <option>Invisalign</option>
              <option>Consulta</option>
              <option>Outro</option>
            </select>
          </div>
          <div>
            <label className="block font-body text-sm font-semibold text-foreground mb-1.5">Mensagem (opcional)</label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              maxLength={1000}
              rows={3}
              placeholder="Conte-nos sobre seu caso..."
              className="w-full px-4 py-3 rounded-lg border border-border bg-cream font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 transition resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full btn-gold text-lg py-4 rounded-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 font-body"
          >
            {isLoading ? 'Enviando...' : (
              <>
                <Send className="w-5 h-5" />
                Agendar Consulta Gratuita
              </>
            )}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
