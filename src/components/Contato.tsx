'use client'

import { useState, FormEvent } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MapPin, Send, Loader2, CheckCircle2 } from 'lucide-react'
import { CONTATO } from '@/data/content'
import ScrollReveal from './ui/ScrollReveal'
import Button from './ui/Button'

export default function Contato() {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('_captcha', 'false')

    try {
      const res = await fetch('https://formsubmit.co/ajax/contato@raspautomacao.com.br', {
        method: 'POST',
        body: data,
      })
      if (!res.ok) throw new Error('Falha no envio')
      setSent(true)
      form.reset()
      setTimeout(() => setSent(false), 4000)
    } catch {
      alert('Erro ao enviar mensagem. Por favor, entre em contato via WhatsApp.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-medium uppercase tracking-widest">
              Entre em Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Vamos Conversar
            </h2>
            <p className="text-white/60 font-serif max-w-2xl mx-auto leading-relaxed">
              Solicite um orçamento ou tire suas dúvidas. Estamos prontos para
              atender você.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <ScrollReveal>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-1">
                    Telefone
                  </h4>
                  <a
                    href={`tel:${CONTATO.telefone}`}
                    className="text-lg hover:text-accent transition-colors"
                  >
                    {CONTATO.telefone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-1">
                    E-mail
                  </h4>
                  <a
                    href={`mailto:${CONTATO.email}`}
                    className="text-lg hover:text-accent transition-colors"
                  >
                    {CONTATO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white/40 uppercase tracking-wider mb-1">
                    Localização
                  </h4>
                  <p className="text-lg">{CONTATO.endereco}</p>
                </div>
              </div>

              <Button
                variant="primary"
                href={`https://wa.me/${CONTATO.whatsapp}`}
                className="w-full justify-center mt-8"
              >
                <Phone size={16} />
                Fale pelo WhatsApp
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-secondary/20 border border-accent/20 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 size={32} className="text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Mensagem Enviada!</h3>
                  <p className="text-white/60">
                    Obrigado pelo contato! Em breve entraremos em contato pelo
                    e-mail informado.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 rounded-2xl bg-secondary/20 border border-white/5"
                >
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      name="nome"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      E-mail
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/60 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      name="mensagem"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-primary/50 border border-white/10 text-white placeholder-white/30 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={sending}
                    className="w-full justify-center disabled:opacity-50"
                  >
                    {sending ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <>
                        <Send size={16} />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
