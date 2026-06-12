'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Zap } from 'lucide-react'
import Button from './ui/Button'

export default function Hero() {
  const scrollToServicos = () => {
    document.querySelector('#servicos')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src="/imagens/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-secondary/90" />
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(0, 180, 216, 0.15) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(0, 180, 216, 0.1) 0%, transparent 50%),
                                radial-gradient(circle at 50% 80%, rgba(30, 58, 95, 0.2) 0%, transparent 50%)`,
            }}
          />
        </div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium uppercase tracking-wider mb-6">
            <Zap size={14} />
            Excelência em Automação Industrial
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
        >
          Conectando{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-400">
            Tecnologia
          </span>{' '}
          à sua Produção
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/60 font-serif max-w-2xl mx-auto mb-10"
        >
          Especialistas em instalações elétricas, automação industrial e
          montagem de painéis elétricos. Soluções completas para impulsionar sua
          operação.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button onClick={scrollToServicos}>
            Nossos Serviços
            <ArrowDown size={16} />
          </Button>
          <Button
            variant="outline"
            href={`https://wa.me/5511963987438`}
          >
            Fale Conosco
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ArrowDown size={20} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  )
}
