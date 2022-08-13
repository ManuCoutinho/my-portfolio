const PROJECTS = [
  {
    name: 'excursionista',
    site: 'https://excursionista.vercel.app/',
    framework: 'Next.js',
    styles: 'Chakra UI',
    tools: ['React', 'TypeScript', 'Axios', 'React-Query', 'React Icons'],
    repo: 'https://github.com/ManuCoutinho/excursionista',
    api: 'Unsplash',
    description:
      'Excursionista é uma página que concentra imagens e informações das cidades mais visitadas em todos os continentes.',
    img: [
      {
        imgPng: '/assets/carousel/excursionista-africa.png',
        imgWebp: '/assets/carousel/excursionista-africa.webp',
        alt: 'imagem do site Excursionita',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/excursionista-home-dark.png',
        imgWebp: '/assets/carousel/excursionista-home-dark.webp',
        alt: 'imagem do site Excursionita em dark mode',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/excursionista-home.png',
        imgWebp: '/assets/carousel/excursionista-home.webp',
        alt: 'imagem do site Excursionita',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/excursionista-log.png',
        imgWebp: '/assets/carousel/excursionista-log.webp',
        alt: 'imagem do site Excursionita',
        id: 'pic-4'
      },
      {
        imgPng: '/assets/carousel/excursionista-route-dark.png',
        imgWebp: '/assets/carousel/excursionista-route-dark.webp',
        alt: 'imagem do site Excursionita em dark mode',
        id: 'pic-5'
      },
      {
        imgPng: '/assets/carousel/excursionista-route.png',
        imgWebp: '/assets/carousel/excursionista-route.webp',
        alt: 'imagem do site Excursionita',
        id: 'pic-6'
      }
    ],
    id: '453be0d3-0b38-41ae-a323-f1f30fd50935',
    coverDefaultLight: '/assets/polaroids/world-d.svg',
    coverDefaultDark: '/assets/polaroids/world-green.svg',
    coverAltLight: '/assets/polaroids/world-d.webp',
    coverAltDark: '/assets/polaroids/world-green.webp',
    alt: 'ilustração de uma mulher marcando destinos no globo',
    route: '/excursionista'
  },
  {
    name: 'Meu Freela',
    site: 'https://meufreela.netlify.app/',
    framework: 'Vite.js',
    styles: 'Sass',
    tools: ['React', 'React Toastfy', 'React Input Mask'],
    repo: 'https://github.com/ManuCoutinho/meuFreela',
    api: '',
    description: 'Meu Freela é uma landing page para captação de clientes.',
    img: [
      {
        imgPng: '/assets/carousel/meufreela-2.png',
        imgWebp: '/assets/carousel/meufreela-2.webp',
        alt: 'imagem do site Meu Freela',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/meufreela-3.png',
        imgWebp: '/assets/carousel/meufreela-3.webp',
        alt: 'imagem do site Meu Freela',
        id: 'pic-2'
      }
    ],
    id: '871b7e32-6948-418e-9e25-750a1f3df677',
    coverDefaultLight: '/assets/polaroids/freela-d.svg',
    coverDefaultDark: '/assets/polaroids/freela-green.svg',
    coverAltLight: '/assets/polaroids/freela-d.webp',
    coverAltDark: '/assets/polaroids/freela-green.webp',
    alt: 'ilustração de um rapaz escolhendo qual caminho seguir',
    route: '/meu-freela'
  },
  {
    name: 'Dev Tracker',
    site: 'https://devtracker.netlify.app/',
    framework: '',
    styles: 'Styled Components',
    tools: ['React', 'React Toastfy', 'React Switch', 'Polished'],
    repo: 'https://github.com/ManuCoutinho/dev-tracker',
    api: 'Github',
    description:
      'Dev Tracker é uma aplicação criada com template "Create React App", totalmente responsiva, para exibição de dados dos usuários do Github. Conta com temas light e dark.',
    img: [
      {
        imgPng: '/assets/carousel/devtracker-home-dark.png',
        imgWebp: '/assets/carousel/devtracker-home-dark.webp',
        alt: 'imagem do site Dev tracker em dark mode',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/devtracker-home-light.png',
        imgWebp: '/assets/carousel/devtracker-home-light.webp',
        alt: 'imagem do site Dev tracker em light mode',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/devtracker-home.png',
        imgWebp: '/assets/carousel/devtracker-home.webp',
        alt: 'imagem do site Dev tracker',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/devtracker-perfil-dark.png',
        imgWebp: '/assets/carousel/devtracker-perfil-dark.webp',
        alt: 'imagem do site Dev tracker com perfil de usuário',
        id: 'pic-4'
      },
      {
        imgPng: '/assets/carousel/devtracker-screen.png',
        imgWebp: '/assets/carousel/devtracker-screen.webp',
        alt: 'imagem do site Dev tracker com perfil de usuário',
        id: 'pic-5'
      }
    ],
    id: '2b514002-4590-487b-a72c-5579ffc8c7b4',
    coverDefaultLight: '/assets/polaroids/searching-d.svg',
    coverDefaultDark: '/assets/polaroids/searching-green.svg',
    coverAltLight: '/assets/polaroids/searching-d.webp',
    coverAltDark: '/assets/polaroids/searching-green.webp',
    alt: 'ilustraçãao de uma mulher pesquisando',
    route: '/dev-tracker'
  },
  {
    name: 'MC Money',
    site: 'Em breve',
    framework: '',
    styles: 'Styled Components',
    tools: [
      'React',
      'TypeScript',
      'React Modal',
      'React Icons',
      'Axios',
      'Polished'
    ],
    repo: 'https://github.com/ManuCoutinho/mcmoney',
    api: 'Miragejs',
    description:
      'MC Money é um dashboard para controle de entradas e saídas financeiras, com dados cadastrados e persistidos por meio do Miragejs.',
    img: [
      {
        imgPng: '/assets/carousel/mcmoney-home.png',
        imgWebp: '/assets/carousel/mcmoney-home.webp',
        alt: 'imagem do site MC Money',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/mcmoney-modal.png',
        imgWebp: '/assets/carousel/mcmoney-modal.webp',
        alt: 'imagem do site MC Money',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/mcmoney-modal-full.png',
        imgWebp: '/assets/carousel/mcmoney-modal-full.webp',
        alt: 'imagem do site MC Money',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/mcmoney-nova.png',
        imgWebp: '/assets/carousel/mcmoney-nova.webp',
        alt: 'imagem do site MC Money',
        id: 'pic-4'
      }
    ],
    id: '6820db69-4085-43ca-9eb6-ce015ba456cf',
    coverDefaultLight: '/assets/polaroids/transfer-money-d.svg',
    coverDefaultDark: '/assets/polaroids/transfer-money-green.svg',
    coverAltLight: '/assets/polaroids/transfer-money-d.webp',
    coverAltDark: '/assets/polaroids/transfer-money-green.webp',
    alt: 'ilustração de uma mulher realizando tranferência financeira online',
    route: '/mcmoney'
  },
  {
    name: 'Dashboard',
    site: 'Em breve',
    framework: 'Next.js',
    styles: 'Chakra UI',
    tools: [
      'React',
      'TypeScript',
      'React Hook Form',
      'React Icons',
      'Axios',
      'React- Query',
      'YUP',
      'Apex Charts',
      'Fakerjs'
    ],
    repo: 'https://github.com/ManuCoutinho/monitor-board',
    api: 'Miragejs',
    description:
      'Dashboard é um aplicação simples que simula o painel de controle coporativo.',
    img: [
      {
        imgPng: '/assets/carousel/dashboard.png',
        imgWebp: '/assets/carousel/dashboard.webp',
        alt: 'imagem da aplicação Dashboard',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/dashboard-error.png',
        imgWebp: '/assets/carousel/dashboard-error.webp',
        alt: 'imagem da aplicação Dashboard',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/dashboard-board.png',
        imgWebp: '/assets/carousel/dashboard-board.webp',
        alt: 'imagem da aplicação Dashboard',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/dashboard-users.png',
        imgWebp: '/assets/carousel/dashboard-users.webp',
        alt: 'imagem da aplicação Dashboard',
        id: 'pic-4'
      },
      {
        imgPng: '/assets/carousel/dashboard-cadastro.png',
        imgWebp: '/assets/carousel/dashboard-cadastro.webp',
        alt: 'imagem da aplicação Dashboard',
        id: 'pic-5'
      },
      {
        imgPng: '/assets/carousel/dashboard-mobile.png',
        imgWebp: '/assets/carousel/dashboard-mobile.webp',
        alt: 'imagem da aplicação Dashboard visão mobile',
        id: 'pic-6'
      },
      {
        imgPng: '/assets/carousel/dashboard-sidebar.png',
        imgWebp: '/assets/carousel/dashboard-sidebar.webp',
        alt: 'imagem da sidebar na aplicação Dashboard',
        id: 'pic-7'
      }
    ],
    id: 'edf652e5-d1d6-4fd3-ae82-cb1a16d7da23',
    coverDefaultLight: '/assets/polaroids/dashboard-d.svg',
    coverDefaultDark: '/assets/polaroids/dashboard-green.svg',
    coverAltLight: '/assets/polaroids/dashboard-d.webp',
    coverAltDark: '/assets/polaroids/dashboard-green.webp',
    alt: 'ilustração de um computadorm com dashboard',
    route: '/dashboard'
  },
  {
    name: 'Todo List',
    site: 'https://ourlist.netlify.app/',
    framework: 'Vite.js',
    styles: 'Styled Components',
    tools: ['React', 'TypeScript', 'Polished', 'Material UI'],
    repo: 'https://github.com/ManuCoutinho/todo-list',
    api: '',
    description:
      'Este é a clássica aplicação para criação de lista de tarefas com utilização de "local storage" para persistência de dados.',
    img: [
      {
        imgPng: '/assets/carousel/todolist-home-dark.png',
        imgWebp: '/assets/carousel/todolist-home-dark.webp',
        alt: 'imagem do site To do List',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/todolist-home.png',
        imgWebp: '/assets/carousel/todolist-home.webp',
        alt: 'imagem do site To do List',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/todolist-check.png',
        imgWebp: '/assets/carousel/todolist-check.webp',
        alt: 'imagem do site To do List',
        id: 'pic-3'
      }
    ],
    id: '91ada4e5-b077-4c3f-b18e-c83d011a1653',
    coverDefaultLight: '/assets/polaroids/list-d.svg',
    coverDefaultDark: '/assets/polaroids/list-green.svg',
    coverAltLight: '/assets/polaroids/list-d.webp',
    coverAltDark: '/assets/polaroids/list-green.webp',
    alt: 'ilustração de uma lista de tarefas',
    route: '/todo'
  },
  {
    name: 'Mata Mosquitos',
    site: 'https://quirky-banach-cf3e3f.netlify.app/',
    framework: '',
    styles: 'Bootstrap',
    tools: ['JavaSCript', 'HTML', 'CSS3'],
    repo: 'https://github.com/ManuCoutinho/mata-mosquito',
    api: '',
    description:
      'Esse é um game que utiliza o canva do browser para renderizar mosquitos. Feito em JavaScript vanilla!',
    img: [
      {
        imgPng: '/assets/carousel/matamosquito1.png',
        imgWebp: '/assets/carousel/matamosquito1.webp',
        alt: 'imagem do game Mata Mosquito',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/matamosquito2.png',
        imgWebp: '/assets/carousel/matamosquito2.webp',
        alt: 'imagem do game Mata Mosquito',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/matamosquito3.png',
        imgWebp: '/assets/carousel/matamosquito3.webp',
        alt: 'imagem do game Mata Mosquito',
        id: 'pic-3'
      }
    ],
    id: 'f6428e82-04f0-484c-8914-19dbb21e24af',
    coverDefaultLight: '/assets/polaroids/gaming-d.svg',
    coverDefaultDark: '/assets/polaroids/gaming-green.svg',
    coverAltLight: '/assets/polaroids/gaming-d.webp',
    coverAltDark: '/assets/polaroids/gaming-green.webp',
    alt: 'ilustração de um homem jogando no fliperama',
    route: '/game'
  },
  {
    name: 'Tecnocrias',
    site: 'Em breve',
    framework: 'Vite.js',
    styles: 'Sass',
    tools: ['React'],
    repo: 'https://github.com/tecnocrias/tecnocrias',
    api: '',
    description: 'Página  oficial da organização, em criação!',
    img: [
      {
        imgPng: '/assets/carousel/tecnocrias-home.png',
        imgWebp: '/assets/carousel/tecnocrias-home.webp',
        alt: 'imagem do protótipo do site Tecnocrias',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/tecnocrias-2.png',
        imgWebp: '/assets/carousel/tecnocrias-2.webp',
        alt: 'imagem do protótipo do site Tecnocrias',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/tecnocrias-3.png',
        imgWebp: '/assets/carousel/tecnocrias-3.webp',
        alt: 'imagem do protótipo do site Tecnocrias',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/tecnocrias-about.png',
        imgWebp: '/assets/carousel/tecnocrias-about.webp',
        alt: 'imagem do protótipo do site Tecnocrias',
        id: 'pic-4'
      },
      {
        imgPng: '/assets/carousel/tecnocrias-contacts.png',
        imgWebp: '/assets/carousel/tecnocrias-contacts.webp',
        alt: 'imagem do protótipo do site Tecnocrias',
        id: 'pic-5'
      }
    ],
    id: ' 44737c1d-a4fa-4db1-ba73-f2958cbba598',
    coverDefaultLight: '/assets/polaroids/starlink-d.svg',
    coverDefaultDark: '/assets/polaroids/starlink-green.svg',
    coverAltLight: '/assets/polaroids/starlink-d.webp',
    coverAltDark: '/assets/polaroids/starlink-green.webp',
    alt: 'ilustração de uma mulher roteando dados',
    route: '/tecnocrias'
  },
  {
    name: 'Banco de Imagens',
    site: 'Em breve',
    framework: 'Next.js',
    styles: 'Chakra UI',
    tools: [
      'React',
      'TypeScript',
      'React Icons',
      'React Hook Form',
      'YUP',
      'React-Query',
      'Faunadb',
      'Axios',
      'Jest',
      'Testing Library'
    ],
    repo: 'https://github.com/ManuCoutinho/image-bank/blob/master/package.json',
    api: 'ImgBB',
    description:
      'Aplicação onde o usuário pode fazer upload de imagens, funcionando como um banco de imagens e visualizador dos arquivos upados. Faz uso do banco de dados não relacional Faunadb.',
    img: [
      {
        imgPng: '/assets/carousel/imgbank-home.png',
        imgWebp: '/assets/carousel/imgbank-home.webp',
        alt: 'imagem da aplicação para upload de imagens',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/imgbank-load.png',
        imgWebp: '/assets/carousel/imgbank-load.webp',
        alt: 'imagem da aplicação para upload de imagens',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/imgbank-modal.png',
        imgWebp: '/assets/carousel/imgbank-modal.webp',
        alt: 'imagem da aplicação para upload de imagens',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/imgbank-upload.png',
        imgWebp: '/assets/carousel/imgbank-upload.webp',
        alt: 'imagem da aplicação para upload de imagens',
        id: 'pic-4'
      }
    ],
    id: '8b4404d8-7d13-489e-82d1-502c7dc8ffbe',
    coverDefaultLight: '/assets/polaroids/polaroid-d.svg',
    coverDefaultDark: '/assets/polaroids/polaroid-green.svg',
    coverAltLight: '/assets/polaroids/polaroid-d.webp',
    coverAltDark: '/assets/polaroids/polaroid-green.webp',
    alt: 'ilustração de uma foto tipo polaroid',
    route: '/bdimage'
  },
  {
    name: 'Simulador de Investimentos',
    site: 'Em breve',
    framework: 'Vite.js',
    styles: 'Styled Components',
    tools: [
      'React',
      'TypeScript',
      'React Icons',
      'React Hook Form',
      'YUP',
      'Axios',
      'Apex Charts'
    ],
    repo: 'https://github.com/ManuCoutinho/invest-simulator',
    api: 'https://github.com/eqi-investimentos/desafio-fake-api',
    description:
      'Este é um dashboard que captura os valores imputados pelo usuário no formulário e, após consulta na base de dados da API, retorna a projeção dos valores investidos.',
    img: [
      {
        imgPng: '/assets/carousel/invest-home.png',
        imgWebp: '/assets/carousel/invest-home.webp',
        alt: 'imagem do dashboard para investimentos',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/invest-board.png',
        imgWebp: '/assets/carousel/invest-board.webp',
        alt: 'imagem do dashboard para investimentos',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/invest-error.png',
        imgWebp: '/assets/carousel/invest-error.webp',
        alt: 'imagem do dashboard para investimentos',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/invest-board2.png',
        imgWebp: '/assets/carousel/invest-board2.webp',
        alt: 'imagem do dashboard para investimentos',
        id: 'pic-4'
      }
    ],
    id: '6fcaf126-e63b-45f5-83f8-dce5a7efdf95',
    coverDefaultLight: '/assets/polaroids/overview-d.svg',
    coverDefaultDark: '/assets/polaroids/overview-green.svg',
    coverAltLight: '/assets/polaroids/overview-d.webp',
    coverAltDark: '/assets/polaroids/overview-green.webp',
    alt: 'ilustração de um homem utilizando celular',
    route: '/invest'
  },
  {
    name: 'Digipix',
    site: 'https://phottos.netlify.app/',
    framework: 'Vite.js',
    styles: 'Sass',
    tools: ['Bootstrap', 'Glidejs', 'Javascript'],
    repo: 'https://github.com/ManuCoutinho/Digipix_landing_page',
    api: '',
    description: 'Está é uma landing page promocional da gráfica Digipix.',
    img: [
      {
        imgPng: '/assets/carousel/digipix1.png',
        imgWebp: '/assets/carousel/digipix1.webp',
        alt: 'imagem da landing page Digipix',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/digipix2.png',
        imgWebp: '/assets/carousel/digipix2.webp',
        alt: 'imagem da landing page Digipix',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/digipix-mobile.png',
        imgWebp: '/assets/carousel/digipix-mobile.webp',
        alt: 'imagem da landing page Digipix',
        id: 'pic-3'
      }
    ],
    id: '6f273215-0c68-40cf-902d-3c0383a3a59b',
    coverDefaultLight: '/assets/polaroids/images-d.svg',
    coverDefaultDark: '/assets/polaroids/images-green.svg',
    coverAltLight: '/assets/polaroids/images-d.webp',
    coverAltDark: '/assets/polaroids/images-green.webp',
    alt: 'ilustração de uma mulher enconstada num celular',
    route: '/digipix'
  },
  {
    name: 'Consulta Processual',
    site: 'Em breve',
    framework: 'Vite.js',
    styles: 'Styled Components',
    tools: ['React', 'TypeScript', 'React Hook Form', 'Axios', 'React Toastfy'],
    repo: 'https://github.com/ManuCoutinho/jusbrasil',
    api: 'Digesto Api',
    description:
      'Este é um módulo para realização de consultas processuais na base de dados do Jusbrasil.',
    img: [
      {
        imgPng: '/assets/carousel/jusbrasil-home.png',
        imgWebp: '/assets/carousel/jusbrasil-home.webp',
        alt: 'imagem do módulo de consulta processual',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/jusbrasil-consulta.png',
        imgWebp: '/assets/carousel/jusbrasil-consulta.webp',
        alt: 'imagem do módulo de consulta processual',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/jusbrasil-andamentos.png',
        imgWebp: '/assets/carousel/jusbrasil-andamentos.webp',
        alt: 'imagem do módulo de consulta processual',
        id: 'pic-3'
      },
      {
        imgPng: '/assets/carousel/jusbrasil-erro.png',
        imgWebp: '/assets/carousel/jusbrasil-erro.webp',
        alt: 'imagem do módulo de consulta processual',
        id: 'pic-4'
      },
      {
        imgPng: '/assets/carousel/jusbrasil-validacao.png',
        imgWebp: '/assets/carousel/jusbrasil-validacao.webp',
        alt: 'imagem do módulo de consulta processual',
        id: 'pic-5'
      }
    ],
    id: '0c3ab6f0-f91e-4318-a0b7-3f59a01f0936',
    coverDefaultLight: '/assets/polaroids/researching-d.svg',
    coverDefaultDark: '/assets/polaroids/researching-green.svg',
    coverAltLight: '/assets/polaroids/researching-d.webp',
    coverAltDark: '/assets/polaroids/researching-green.webp',
    alt: 'ilustração de um homem colando pesquisas',
    route: '/processos'
  },
  {
    name: 'News Page',
    site: 'https://newspage.vercel.app/',
    framework: 'Next.js',
    styles: 'Sass',
    tools: [
      'React',
      'TypeScript',
      'React Icons',
      'Faunadb',
      'Axios',
      'Next-auth',
      'Prismic CMS'
    ],
    repo: 'https://github.com/ManuCoutinho/react-news',
    api: 'Stripe',
    description:
      'News Page é uma página no "estilo" blog por assinatura, que utiliza a api do Stripe como método de pagamento da assinatura mensal. A autenticação fica por conta no Next-auth, viculado a conta do Github do usuário.',
    img: [
      {
        imgPng: '/assets/carousel/newspage-home.png',
        imgWebp: '/assets/carousel/newspage-home.webp',
        alt: 'imagem do blog News Page',
        id: 'pic-1'
      },
      {
        imgPng: '/assets/carousel/newspage-logout.png',
        imgWebp: '/assets/carousel/newspage-logout.webp',
        alt: 'imagem do blog News Page',
        id: 'pic-2'
      },
      {
        imgPng: '/assets/carousel/newspage-posts.png',
        imgWebp: '/assets/carousel/newspage-posts.webp',
        alt: 'imagem do blog News Page',
        id: 'pic-3'
      }
    ],
    id: '01822210-7884-4225-932b-9fd65dd4715b',
    coverDefaultLight: '/assets/polaroids/news-d.svg',
    coverDefaultDark: '/assets/polaroids/news-green.svg',
    coverAltLight: '/assets/polaroids/news-d.webp',
    coverAltDark: '/assets/polaroids/news-green.webp',
    alt: 'ilustração de um foguete decolando',
    route: '/newspage'
  },
  {
    name: ' Feedback Widget',
    site: 'https://sentfeedback.vercel.app/',
    framework: 'Vite.js',
    styles: 'Tailwind CSS',
    tools: [
      'React',
      'TypeScript',
      'Headless UI',
      'Phosphor',
      'Prisma ORM',
      'PostgreSQL'
    ],
    repo: 'https://github.com/ManuCoutinho/app-widget',
    api: 'Express.js',
    description:
      'App Widget é uma aplicação fullstack para coleta e envio de feedbacks, coletando a informação fornecida pelo usuário, juntamente com  uma print da tela e envia um e-mail ao administrador do sistema.',
    img: [
      {
        imgPng: '/assets/carousel/widget.png',
        imgWebp: '/assets/carousel/widget.webp',
        alt: 'imagem do app widget',
        id: 'pic-1'
      }
    ],
    id: 'f45e24ac-cd7a-11ec-9d64-0242ac120002',
    coverDefaultLight: '/assets/polaroids/feedback-d.svg',
    coverDefaultDark: '/assets/polaroids/feedback-green.svg',
    coverAltLight: '/assets/polaroids/feedback-d.webp',
    coverAltDark: '/assets/polaroids/feedback-green.webp',
    alt: 'ilustraçãao de um app',
    route: '/feedback'
  }
]
export default PROJECTS
