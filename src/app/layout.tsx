import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RASP Automação | Automação Industrial & Instalações Elétricas',
  description:
    'Especialista em automação industrial, instalações elétricas, montagem de painéis elétricos e projetos industriais. Há mais de 10 anos conectando tecnologia à sua produção.',
  openGraph: {
    title: 'RASP Automação',
    description:
      'Automação industrial, instalações elétricas e projetos industriais.',
    url: 'https://www.raspautomacao.com.br',
    siteName: 'RASP Automação',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
