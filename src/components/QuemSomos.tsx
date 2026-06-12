'use client'

import { Building2, Award, HardHat } from 'lucide-react'
import ScrollReveal from './ui/ScrollReveal'

const DIFERENCIAIS = [
  {
    icon: Award,
    title: 'Experiência Comprovada',
    desc: 'Mais de uma década entregando soluções elétricas e de automação com excelência.',
  },
  {
    icon: HardHat,
    title: 'Equipe Técnica Especializada',
    desc: 'Profissionais certificados e treinados nas mais recentes tecnologias do mercado.',
  },
  {
    icon: Building2,
    title: 'Projetos Personalizados',
    desc: 'Cada projeto é desenvolvido sob medida para atender exatamente sua necessidade.',
  },
]

export default function QuemSomos() {
  return (
    <section id="quem-somos" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-accent text-xs font-medium uppercase tracking-widest">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
              Quem Somos
            </h2>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="flex-1">
              <p className="text-white/60 font-serif text-lg leading-relaxed">
                A RASP Automação é uma empresa especializada nas áreas de
                instalações elétricas, automação industrial, montagem de painéis
                elétricos e projetos industriais. Combinamos expertise técnica
                com inovação para entregar resultados que transformam operações.
              </p>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-full h-full rounded-2xl border border-accent/20" />
                <img
                  src="/imagens/empresa.jpg"
                  alt="Equipe RASP Automação"
                  className="relative rounded-2xl w-full h-[300px] object-cover"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {DIFERENCIAIS.map((item, index) => {
            const Icon = item.icon
            return (
              <ScrollReveal key={item.title} delay={index * 0.1}>
                <div className="group p-8 rounded-2xl bg-primary/50 border border-white/5 hover:border-accent/20 transition-all duration-500 hover:shadow-xl hover:shadow-accent/5">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
