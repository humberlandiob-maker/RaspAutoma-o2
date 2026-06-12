'use client'

import { servicos } from '@/data/content'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'

export default function Servicos() {
  const [selected, setSelected] = useState<number | null>(null)

  return (
    <section id="servicos" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-medium uppercase tracking-widest">
              Nossas Especialidades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Serviços
            </h2>
            <p className="text-white/60 font-serif max-w-2xl mx-auto leading-relaxed">
              Soluções completas em engenharia elétrica e automação industrial
              para impulsionar sua operação.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicos.map((servico, index) => (
            <ScrollReveal key={servico.id} delay={index * 0.05}>
              <button
                onClick={() =>
                  setSelected(selected === index ? null : index)
                }
                className="group relative w-full text-left overflow-hidden rounded-2xl bg-secondary/20 border border-white/5 hover:border-accent/20 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={servico.imagem}
                    alt={servico.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
                    {servico.titulo}
                  </h3>
                  <p className="text-white/60 text-sm line-clamp-2">
                    {servico.descricao}
                  </p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <AnimatePresence>
          {selected !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
              onClick={() => setSelected(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-primary border border-white/10 rounded-2xl max-w-lg w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={servicos[selected].imagem}
                    alt={servicos[selected].titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold">
                      {servicos[selected].titulo}
                    </h3>
                    <button
                      onClick={() => setSelected(null)}
                      className="text-white/40 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  <p className="text-white/60 leading-relaxed">
                    {servicos[selected].descricao}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
