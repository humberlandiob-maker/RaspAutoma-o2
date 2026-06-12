'use client'

import { CONTATO } from '@/data/content'
import { Phone, Mail, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <img
              src="/imagens/logotipo.png"
              alt="RASP Automação"
              className="h-[60px] w-auto mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed">
              Especialistas em automação industrial, instalações elétricas e
              montagem de painéis elétricos. Conectando tecnologia à sua
              produção.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href={`tel:${CONTATO.telefone}`}
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
              >
                <Phone size={14} />
                {CONTATO.telefone}
              </a>
              <a
                href={`mailto:${CONTATO.email}`}
                className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors text-sm"
              >
                <Mail size={14} />
                {CONTATO.email}
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between">
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full border border-white/10 hover:border-accent/50 hover:bg-accent/10 transition-all duration-300 text-white/40 hover:text-accent"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} RASP Automação. Todos os direitos
            reservados.
          </p>
          <p className="text-white/20 text-xs">
            Desenvolvido por{' '}
            <a
              href="http://www.estudiocriarte.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              Estúdio Criarte
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
