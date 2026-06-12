export interface Servico {
  id: string
  titulo: string
  descricao: string
  imagem: string
}

export interface Projeto {
  id: string
  titulo: string
  descricao: string
  imagem: string
}

export const servicos: Servico[] = [
  {
    id: 'instalacoes',
    titulo: 'Instalações Elétricas',
    descricao:
      'Executamos instalações elétricas residenciais e industriais, instalação de eletro-calhas, quadros elétricos, quadros para alimentação de máquinas, iluminação e DPS.',
    imagem: '/imagens/servico-instalacoes.jpg',
  },
  {
    id: 'automacao',
    titulo: 'Controle e Automação',
    descricao:
      'Soluções de Controle de Movimento — servomotores, inversores de frequência, CLPs, IHMs e automação de processos e máquinas industriais.',
    imagem: '/imagens/servico-automacao.jpg',
  },
  {
    id: 'paineis',
    titulo: 'Montagem de Painéis Elétricos',
    descricao:
      'Montagem e Retrofit de Painéis Elétricos, diagramação de esquemas elétricos conforme norma vigente.',
    imagem: '/imagens/servico-paineis.jpg',
  },
  {
    id: 'projetos',
    titulo: 'Projetos Elétricos',
    descricao:
      'Desenvolvemos projetos elétricos conforme análise de sua aplicação. Você conhece o processo e nós tornamos real a sua necessidade.',
    imagem: '/imagens/servico-projetos.jpg',
  },
  {
    id: 'manutencao',
    titulo: 'Manutenção em Geral',
    descricao:
      'Manutenção de máquinas em geral, sistemas elétricos industriais e residenciais, manutenção preventiva e upgrades.',
    imagem: '/imagens/servico-manutencao.jpg',
  },
  {
    id: 'programacao',
    titulo: 'Programação de CLPs e IHMs',
    descricao:
      'Programação de CLPs e IHMs adequados a sua aplicação e em conformidade com a norma IEC61131-3.',
    imagem: '/imagens/servico-programacao.jpg',
  },
]

export const projetos: Projeto[] = [
  {
    id: 'p1',
    titulo: 'Painel de Controle Industrial',
    descricao: 'Painel elétrico para linha de produção automatizada.',
    imagem: '/imagens/projeto-01.jpg',
  },
  {
    id: 'p2',
    titulo: 'Automação Predial',
    descricao: 'Sistema de automação para edifício comercial.',
    imagem: '/imagens/projeto-02.jpg',
  },
  {
    id: 'p3',
    titulo: 'Instalação Industrial',
    descricao: 'Rede elétrica trifásica para indústria metalúrgica.',
    imagem: '/imagens/projeto-03.jpg',
  },
]

export const CONTATO = {
  telefone: '1196398-7438',
  email: 'contato@raspautomacao.com.br',
  whatsapp: '5511963987438',
  endereco: 'São Paulo, SP',
}
