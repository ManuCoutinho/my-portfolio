import { DataType } from '@models/data'

const PROJECTS: DataType[] = [
	{
		name: 'excursionista',
		site: 'https://excursionista.vercel.app/',
		framework: 'Next.js',
		doc: null,
		styles: 'Chakra UI',
		tools: ['React', 'TypeScript', 'Axios', 'React-Query', 'Swiper'],
		repo: 'https://github.com/ManuCoutinho/excursionista',
		api: 'Unsplash',
		description:
			'Excursionista é uma página que concentra lindas imagens e informações sobre os destinos turísticos mais visitados em cada continente.',
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
		id: '7929af96-34b6-4ff4-b0d5-eef9eab0750b',
		coverDefault: '/assets/polaroids/excursionista.jpg',
		coverAlt: '/assets/polaroids/excursionista.webp',
		alt: 'ilustração de uma mulher marcando destinos no globo',
		route: '/excursionista'
	},

	{
		name: 'Tecnocrias',
		site: 'Em breve',
		framework: 'Vite.js',
		doc: null,
		styles: 'Sass',
		tools: ['React'],
		repo: 'https://github.com/tecnocrias/tecnocrias',
		api: null,
		description: 'Página  oficial da organização Tecnocrias, (em criação)!',
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
		id: 'c5d3bb79-164f-4738-b345-0f8760cd574d',
		coverDefault: '/assets/polaroids/tecnocrias.jpg',
		coverAlt: '/assets/polaroids/tecnocrias.webp',
		alt: 'ilustração de uma mulher roteando dados',
		route: '/tecnocrias'
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
			'React Icons',
			'React Hook Form',
			'YUP',
			'React-Query',
			'Faunadb',
			'Axios',
			'Jest',
			'Testing Library'
		],
		repo: 'https://github.com/ManuCoutinho/save-pic',
		api: 'ImgBB',
		description:
			'Aplicação onde o usuário pode fazer upload de imagens, funcionando como um banco e visualizador de imagens. Faz uso do banco de dados não relacional Faunadb e integração com a API do ImgBB.',
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
			'Storybook',
			'Phosphor',
			'Keen Slider',
			'Radix-ui',
			'React Hook Form',
			'React Native',
			'Expo'
		],
		repo: 'https://github.com/ManuCoutinho/find-duo-webapp',
		api: 'Express.js',
		description: `Esta é uma aplicação completa para publicação de anúncios para encontrar seu duo e jogar seu game preferido.
    A versão web disponibiliza a criação dos anúncios, que são exibidos no app mobile construído em React Native. Tudo isso integrado por uma API própria em Node.js`,
		img: [
			{
				imgPng: '/assets/carousel/duo.gif',
				imgWebp: '/assets/carousel/duo.gif',
				alt: 'gif find duo mobile gif',
				id: 'pic-1'
			},
			{
				imgPng: '/assets/carousel/duo2.png',
				imgWebp: '/assets/carousel/duo2.webp',
				alt: 'imagem do app find duo',
				id: 'pic-2'
			},
			{
				imgPng: '/assets/carousel/duo3.png',
				imgWebp: '/assets/carousel/duo3.webp',
				alt: 'imagem do app find duo',
				id: 'pic-3'
			},
			{
				imgPng: '/assets/carousel/duo4.png',
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
			'Phosphor',
			'Prisma ORM',
			'PostgreSQL',
			'MailChimp',
			'Storybook'
		],
		repo: 'https://github.com/ManuCoutinho/app-widget',
		api: 'Express.js',
		description: `App Widget é uma aplicação fullstack para coleta e envio de feedbacks. 
    Com o app o usuário, pode facilmente, enviar um feedback ao administrador do sistema, juntamente com uma print da tela.
    Doccumentação completa com Stgorybook e integração com API própria para envio dos feedback via e-mail `,
		img: [
			{
				imgPng: '/assets/carousel/widget.png',
				imgWebp: '/assets/carousel/widget.webp',
				alt: 'imagem do app widget',
				id: 'pic-1'
			},
			{
				imgPng: '/assets/carousel/widget2.png',
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
			'Está é uma landing page promocional da gráfica Digipix, construída em vanilla Js.',
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
		tools: ['React', 'React Toastfy', 'React Switch', 'Polished'],
		repo: 'https://github.com/ManuCoutinho/dev-tracker',
		api: 'Github',
		description:
			'Dev Tracker é uma aplicação que contém integração dom a APi do Github, fornecendo a exibição de dados dos usuários cadastrados na plataforma. Conta com temas light e dark.',
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
				imgPng: '/assets/carousel/lab.png',
				imgWebp: '/assets/carousel/lab.webp',
				alt: 'imagem do app lab',
				id: 'pic-1'
			},
			{
				imgPng: '/assets/carousel/lab2.png',
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
