import Header from '@/components/Header'
import Hero from '@/components/Hero'
import QuemSomos from '@/components/QuemSomos'
import Servicos from '@/components/Servicos'
import Projetos from '@/components/Projetos'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <QuemSomos />
        <Servicos />
        <Projetos />
        <Contato />
      </main>
      <Footer />
    </>
  )
}
