import { DataType } from '@models/data'

const PROJECTS: DataType[] = [
	{
		name: 'excursionista',
		site: 'https://excursionista.manucoutinho.com/',
		framework: 'Next.js',
		doc: null,
		styles: 'Chakra UI',
		tools: [
			'React',
			'TypeScript',
			'React-Query',
			'Swiper',
			'Graphql',
			'Unsplash API'
		],
		repo: 'https://manucoutinho.github.io/excursionista/',
		api: 'GraphCMS',
		description:
			'Excursionista é uma página que concentra lindas imagens e informações sobre os destinos turísticos mais visitados em cada continente. Contém integração com a Usplash API e consome dados em GraphQL.',
		img: [
			{
				imgWebp: '/assets/carousel/excursionista-africa.webp',
				alt: 'imagem do site Excursionita',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/excursionista-home-dark.webp',
				alt: 'imagem do site Excursionita em dark mode',
				id: 'pic-2'
			},
			{
				imgWebp: '/assets/carousel/excursionista-home.webp',
				alt: 'imagem do site Excursionita',
				id: 'pic-3'
			},
			{
				imgWebp: '/assets/carousel/excursionista-log.webp',
				alt: 'imagem do site Excursionita',
				id: 'pic-4'
			},
			{
				imgWebp: '/assets/carousel/excursionista-route-dark.webp',
				alt: 'imagem do site Excursionita em dark mode',
				id: 'pic-5'
			},
			{
				imgWebp: '/assets/carousel/excursionista-route.webp',
				alt: 'imagem do site Excursionita',
				id: 'pic-6'
			}
		],
		id: '7929af96-34b6-4ff4-b0d5-eef9eab0750b',
		coverDefault: '/assets/polaroids/excursionista.jpg',
		coverAlt: '/assets/polaroids/excursionista.webp',
		alt: 'foto de balões de ar quente coloridos',
		route: '/excursionista'
	},
	{
		name: 'Video Play',
		site: 'Em breve',
		framework: 'Vite.js',
		doc: null,
		styles: 'Tailwind CSS',
		tools: [
			'React',
			'TypeScript',
			'Redux/Redux-toolkit',
			'Zustand',
			'React Player'
		],
		repo: 'https://github.com/ManuCoutinho/video-play',
		api: 'Json Server',
		description:
			'Player de vídeo integrado ao Youtube, contendo expemplo de gerenciamento de estado com Redux e Zustand.',
		img: [
			{
				imgWebp: '/assets/carousel/video-2.webp',
				alt: 'imagem do protótipo do site Video Play',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/video-1.webp',
				alt: 'imagem do protótipo do site Video Play',
				id: 'pic-2'
			}
		],
		id: 'c5d3bb79-164f-4738-3333-0f8eew5cd574d',
		coverDefault: '/assets/polaroids/video.jpg',
		coverAlt: '/assets/polaroids/video.webp',
		alt: 'foto de ma TV com a logo na Netflix',
		route: '/video-play'
	},

	{
		name: 'Tecnocrias',
		site: 'https://manucoutinho.github.io/tecnocrias/',
		framework: 'Vite.js',
		doc: null,
		styles: 'Sass',
		tools: ['React', 'JavaScript', 'Vanta.js'],
		repo: 'https://github.com/ManuCoutinho/tecnocrias',
		api: null,
		description:
			'Web page do grupo de estudos Tecnocrias. Uma iniciativa open source.',
		img: [
			{
				imgWebp: '/assets/carousel/tecnocrias-2.webp',
				alt: 'imagem da home page Tecnocrias',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/tecnocrias-1.webp',
				alt: 'imagem do protótipo do site Tecnocrias',
				id: 'pic-2'
			}
		],
		id: 'c5d3bb79-164f-4738-b345-0f8eew5cd574d',
		coverDefault: '/assets/polaroids/tecnocrias.jpg',
		coverAlt: '/assets/polaroids/tecnocrias.webp',
		alt: 'foto de um notebook com uma mensagem motivacional',
		route: '/tecnocrias'
	},
	{
		name: 'Mini Messenger',
		site: 'Em breve',
		framework: 'Vite.js',
		doc: null,
		styles: 'Sass',
		tools: [
			'React',
			'TypeScript',
			'Socket.io',
			'Node.js',
			'Prisma.io',
			'PostgreSQL',
			'Docker'
		],
		repo: 'https://github.com/manucoutinho/mini-messenger',
		api: 'Express.Js /Github',
		description: `App full-stack, que pelo client utiliza o combo React + Vite para fornecer a experiência de SPA. 
		Na estilização foi utilizado Sass em arquivo modular, seguindo o padrão BEM. Já a API é construída em Express.js utilizando Socket.io para tráfego das menssagens.`,
		img: [
			{
				imgWebp: '/assets/carousel/messenger.webp',
				alt: 'imagem do app Beatle Code',
				id: 'pic-1'
			}
		],
		id: 'c5d3bb79-164f-4738-b345-5567t0cd574d',
		coverDefault: '/assets/polaroids/messenger.jpg',
		coverAlt: '/assets/polaroids/messenger.webp',
		alt: 'foto mostrando chat na tela de um celular',
		route: '/messenger'
	},
	{
		name: 'Trips',
		site: 'https://trips.manucoutinho.com/',
		framework: 'Next.js',
		doc: null,
		styles: 'Styled Components',
		tools: ['React', 'TypeScript', 'GraphQL', 'Mapbox API', 'Leaflet'],
		repo: 'https://github.com/manucoutinho/trip-app',
		api: 'GraphCMS',
		description:
			'Página com imagens e curiosidades de diversos países. Aproveita ISR fornecido pelo Next.js ao consumir as APIS do Mapbox e GraphCMS.',
		img: [
			{
				imgWebp: '/assets/carousel/trips-2.webp',
				alt: 'imagem site trips.manucoutinho.com',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/trips-1.webp',
				alt: 'imagem site trips.manucoutinho.com',
				id: 'pic-2'
			},
			{
				imgWebp: '/assets/carousel/trips-3.webp',
				alt: 'imagem site trips.manucoutinho.com',
				id: 'pic-3'
			},
			{
				imgWebp: '/assets/carousel/trips-4.webp',
				alt: 'imagem site trips.manucoutinho.com',
				id: 'pic-4'
			}
		],
		id: 'c5d3bb79-164f-4738-b345-066678d574d',
		coverDefault: '/assets/polaroids/trips.jpg',
		coverAlt: '/assets/polaroids/trips.webp',
		alt: 'foto mostrando parcial da asa de um avião',
		route: '/trips'
	},
	{
		name: 'Banco de Imagens',
		site: 'https://save-pic.vercel.app',
		framework: 'Next.js',
		doc: null,
		styles: 'Chakra UI',
		tools: [
			'React',
			'TypeScript',
			'React Hook Form',
			'YUP',
			'React-Query',
			'Faunadb'
		],
		repo: 'https://github.com/ManuCoutinho/save-pic',
		api: 'ImgBB',
		description:
			'Aplicação onde o usuário pode fazer upload de imagens, funcionando como um banco e visualizador de imagens. Faz uso do banco de dados não relacional Faunadb e integração com a API do ImgBB.',
		img: [
			{
				imgWebp: '/assets/carousel/imgbank-home.webp',
				alt: 'imagem da aplicação para upload de imagens',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/imgbank-load.webp',
				alt: 'imagem da aplicação para upload de imagens',
				id: 'pic-2'
			},
			{
				imgWebp: '/assets/carousel/imgbank-modal.webp',
				alt: 'imagem da aplicação para upload de imagens',
				id: 'pic-3'
			},
			{
				imgWebp: '/assets/carousel/imgbank-upload.webp',
				alt: 'imagem da aplicação para upload de imagens',
				id: 'pic-4'
			}
		],
		id: 'ca9140bc-b525-4130-8ac3-09b5f46563f0',
		coverDefault: '/assets/polaroids/save-pic.jpg',
		coverAlt: '/assets/polaroids/save-pic.webp',
		alt: 'ilustração de uma foto tipo polaroid',
		route: '/bdimage'
	},
	{
		name: 'Find Duo',
		site: 'https://find-duo.netlify.app',
		framework: 'Vite.js',
		doc: null,
		styles: 'Tailwind CSS',
		tools: [
			'React',
			'TypeScript',
			'Keen Slider',
			'Radix-ui',
			'React Hook Form',
			'React Native',
			'Expo',
			'Node.js'
		],
		repo: 'https://github.com/ManuCoutinho/find-duo-webapp',
		api: 'Express.js',
		description: `Esta é uma aplicação completa para publicação de anúncios para encontrar seu duo e jogar seu game preferido.
    A versão web disponibiliza a criação dos anúncios, que são exibidos no app mobile construído em React Native. Tudo isso integrado por uma API própria em Node.js`,
		img: [
			{
				imgWebp: '/assets/carousel/duo.gif',
				alt: 'gif find duo mobile gif',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/duo2.webp',
				alt: 'imagem do app find duo',
				id: 'pic-2'
			},
			{
				imgWebp: '/assets/carousel/duo3.webp',
				alt: 'imagem do app find duo',
				id: 'pic-3'
			},
			{
				imgWebp: '/assets/carousel/duo4.webp',
				alt: 'imagem do app find duo',
				id: 'pic-4'
			}
		],
		id: '370f39a7-72e0-45a6-a9c5-bd8817faebe9',
		coverDefault: '/assets/polaroids/duo.jpg',
		coverAlt: '/assets/polaroids/duo.webp',
		alt: 'ilustraçãao de um app',
		route: '/duo'
	},
	{
		name: ' Feedback Widget',
		site: 'https://sentfeedback.vercel.app/',
		framework: 'Vite.js',
		doc: 'https://sentfeedback.surge.sh',
		styles: 'Tailwind CSS',
		tools: [
			'React',
			'TypeScript',
			'Headless UI',
			'Prisma.io',
			'PostgreSQL',
			'MailChimp',
			'Storybook'
		],
		repo: 'https://github.com/ManuCoutinho/app-widget',
		api: 'Express.js',
		description: `App Widget é uma aplicação fullstack para coleta e envio de feedbacks. 
    Com o app o usuário, pode facilmente enviar um feedback ao help-desk, juntamente com uma print da tela.
    Documentação completa com Storybook e API própria para envio dos feedback via e-mail.`,
		img: [
			{
				imgWebp: '/assets/carousel/widget.webp',
				alt: 'imagem do app widget',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/widget2.webp',
				alt: 'imagem do app widget',
				id: 'pic-2'
			}
		],
		id: '74d6c398-eda9-4e91-b24c-fcc410d45cb3',
		coverDefault: '/assets/polaroids/widget.jpg',
		coverAlt: '/assets/polaroids/widget.webp',
		alt: 'ilustraçãao de um app',
		route: '/feedback'
	},
	{
		name: 'Meu Freela',
		site: 'https://meufreela.netlify.app/',
		framework: 'Vite.js',
		doc: null,
		styles: 'Sass',
		tools: ['React', 'React Toastfy'],
		repo: 'https://github.com/ManuCoutinho/meuFreela',
		api: '',
		description:
			'Meu Freela é uma landing page demo para captação de clientes.',
		img: [
			{
				imgWebp: '/assets/carousel/meufreela-2.webp',
				alt: 'imagem do site Meu Freela',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/meufreela-3.webp',
				alt: 'imagem do site Meu Freela',
				id: 'pic-2'
			}
		],
		id: '871b7e32-6948-418e-9e25-750a1f3df677',
		coverDefault: '/assets/polaroids/freela.jpg',
		coverAlt: '/assets/polaroids/freela.webp',
		alt: 'ilustração de um rapaz escolhendo qual caminho seguir',
		route: '/meu-freela'
	},
	{
		name: 'Digipix',
		site: 'https://phottos.netlify.app/',
		framework: 'Vite.js',
		doc: null,
		styles: 'Sass',
		tools: ['Bootstrap', 'Glidejs', 'Javascript'],
		repo: 'https://github.com/ManuCoutinho/Digipix_landing_page',
		api: null,
		description:
			'Está é uma landing page promocional da gráfica Digipix, construída em vanilla JS.',
		img: [
			{
				imgWebp: '/assets/carousel/digipix1.webp',
				alt: 'imagem da landing page Digipix',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/digipix2.webp',
				alt: 'imagem da landing page Digipix',
				id: 'pic-2'
			},
			{
				imgWebp: '/assets/carousel/digipix-mobile.webp',
				alt: 'imagem da landing page Digipix',
				id: 'pic-3'
			}
		],
		id: 'e6b7e3f6-6f3a-4c02-9f7f-514191aa4173',
		coverDefault: '/assets/polaroids/digipix.jpg',
		coverAlt: '/assets/polaroids/digipix.webp',
		alt: 'ilustração de uma mulher enconstada num celular',
		route: '/digipix'
	},
	{
		name: 'Dev Tracker',
		site: 'https://devtracker.netlify.app/',
		framework: null,
		doc: null,
		styles: 'Styled Components',
		tools: ['React', 'React Toastfy', 'React Switch'],
		repo: 'https://github.com/ManuCoutinho/dev-tracker',
		api: 'Github',
		description:
			'Dev Tracker é uma aplicação que contém integração dom a APi do Github, fornecendo a exibição de dados dos usuários cadastrados na plataforma. Conta com temas light e dark.',
		img: [
			{
				imgWebp: '/assets/carousel/devtracker-home-dark.webp',
				alt: 'imagem do site Dev tracker em dark mode',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/devtracker-home-light.webp',
				alt: 'imagem do site Dev tracker em light mode',
				id: 'pic-2'
			},
			{
				imgWebp: '/assets/carousel/devtracker-home.webp',
				alt: 'imagem do site Dev tracker',
				id: 'pic-3'
			},
			{
				imgWebp: '/assets/carousel/devtracker-perfil-dark.webp',
				alt: 'imagem do site Dev tracker com perfil de usuário',
				id: 'pic-4'
			},
			{
				imgWebp: '/assets/carousel/devtracker-screen.webp',
				alt: 'imagem do site Dev tracker com perfil de usuário',
				id: 'pic-5'
			}
		],
		id: '6d40237f-5c62-4bb2-8cd3-ba8e8878e6cd',
		coverDefault: '/assets/polaroids/tracker.jpg',
		coverAlt: '/assets/polaroids/tracker.webp',
		alt: 'ilustraçãao de uma mulher pesquisando',
		route: '/dev-tracker'
	},
	{
		name: 'Todo List',
		site: 'https://ourlist.netlify.app/',
		framework: 'Vite.js',
		doc: null,
		styles: 'Styled Components',
		tools: ['React', 'TypeScript', 'Polished', 'Material UI'],
		repo: 'https://github.com/ManuCoutinho/todo-list',
		api: null,
		description:
			'Este app é uma releitura da clássica lista de tarefas. Conta com temas light e dark e,  com armazentmento dos dados localmente.',
		img: [
			{
				imgWebp: '/assets/carousel/todolist-home-dark.webp',
				alt: 'imagem do site To do List',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/todolist-home.webp',
				alt: 'imagem do site To do List',
				id: 'pic-2'
			},
			{
				imgWebp: '/assets/carousel/todolist-check.webp',
				alt: 'imagem do site To do List',
				id: 'pic-3'
			}
		],
		id: 'faf754dc-ade5-49dd-9754-903076a8bffa',
		coverDefault: '/assets/polaroids/list.jpg',
		coverAlt: '/assets/polaroids/list.webp',
		alt: 'ilustração de uma lista de tarefas',
		route: '/todo'
	},
	{
		name: 'Design System',
		site: 'http://labds.surge.sh',
		framework: 'Vite.js',
		doc: 'https://manucoutinho.github.io/iglab-design-system',
		styles: 'Tailwind CSS',
		tools: [
			'React',
			'TypeScript',
			'Storybook',
			'Phosphor',
			'Figma',
			'Radix-ui'
		],
		repo: 'https://github.com/ManuCoutinho/iglab-design-system',
		api: '-',
		description: `Esta é uma aplicação demo para construção de design system. Contém protoripação em Figma, documentação com Storybook e CI/CD com Github actions`,
		img: [
			{
				imgWebp: '/assets/carousel/lab.webp',
				alt: 'imagem do app lab',
				id: 'pic-1'
			},
			{
				imgWebp: '/assets/carousel/lab2.webp',
				alt: 'imagem do app lab',
				id: 'pic-2'
			}
		],
		id: 'ed2fe852-21d0-4883-b179-6bea2e04b7cf',
		coverDefault: '/assets/polaroids/design.jpg',
		coverAlt: '/assets/polaroids/design.webp',
		alt: 'ilustraçãao de um app',
		route: '/labds'
	}
]
export default PROJECTS
