'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { projetos } from '@/data/content'
import ScrollReveal from './ui/ScrollReveal'

export default function Projetos() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const goNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % projetos.length)
    }
  }

  const goPrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + projetos.length) % projetos.length)
    }
  }

  return (
    <section id="projetos" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-medium uppercase tracking-widest">
              Realizações
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Projetos
            </h2>
            <p className="text-white/60 font-serif max-w-2xl mx-auto leading-relaxed">
              Conheça alguns dos projetos que entregamos com excelência.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {projetos.map((projeto, index) => (
            <ScrollReveal key={projeto.id} delay={index * 0.1}>
              <button
                onClick={() => openLightbox(index)}
                className="group relative w-full text-left overflow-hidden rounded-2xl border border-white/5 hover:border-accent/20 transition-all duration-500"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={projeto.imagem}
                    alt={projeto.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3 className="text-lg font-semibold">{projeto.titulo}</h3>
                  <p className="text-white/60 text-sm">{projeto.descricao}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goPrev()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
              >
                <ChevronLeft size={32} />
              </button>

              <motion.div
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="aspect-video rounded-2xl overflow-hidden border border-white/10">
                  <img
                    src={projetos[lightboxIndex].imagem}
                    alt={projetos[lightboxIndex].titulo}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-bold">
                    {projetos[lightboxIndex].titulo}
                  </h3>
                  <p className="text-white/60 mt-1">
                    {projetos[lightboxIndex].descricao}
                  </p>
                </div>
              </motion.div>

              <button
                onClick={(e) => {
                  e.stopPropagation()
                  goNext()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-white/50 hover:text-white transition-colors z-10"
              >
                <ChevronRight size={32} />
              </button>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-10"
              >
                <X size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
