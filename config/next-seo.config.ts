import { DefaultSeoProps } from 'next-seo'

export default {
	openGraph: {
		type: 'website',
		locale: 'pt_BR',
		url: process.env.NEXT_PUBLIC_CANONICAL || '',
		images: [
			{
				url: process.env.NEXT_PUBLIC_PREVIEW || '',
				width: 1200,
				height: 800,
				alt: process.env.NEXT_PUBLIC_ALT || '',
				type: 'image/png'
			}
		],
		siteName: 'Manu Coutinho'
	},
	twitter: {
		handle: '@manucout',
		site: '@manucout',
		cardType: 'summary_large_image'
	},
	defaultTitle: 'Manu Coutinho | Portfólio',
	description: 'Portfólio de Emanuela Coutinho - Desenvolvedora Front-end',
	canonical: process.env.NEXT_PUBLIC_CANONICAL,
	themeColor: '#EAAB99',
	additionalMetaTags: [
		{
			property: 'keywords',
			content:
				'portfolio manucoutinho manu coutinho front-end frontend developer desenvolvedora programação site pessoal encomende template web page personal webdeveloper, web, developer, programador, desenvolvedor, manu coutinho, front-end, freelancer, freela, website, portfolio, ManuCoutinho, Emanuela Coutinho, react, html, inteface, site, site pessoal'
		},
		{
			property: 'author',
			content: 'Manu Coutinho'
		},
		{
			property: 'language',
			content: 'pt-br',
			httpEquiv: 'content-language'
		},
		{
			property: 'copyright',
			content: 'ManuCoutinho 2022'
		},
		{
			property: 'msapplication-TileColor',
			content: '#ffffff'
		},
		{
			property: 'msapplication-TileImage',
			content: '/ms-icon-144x144.png'
		}
	],
	additionalLinkTags: [
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-57x57.png',
			sizes: '57x57'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-60x60.png',
			sizes: '60x60'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-72x72.png',
			sizes: '72x72'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-76x76.png',
			sizes: '76x76'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-144x144.png',
			sizes: '144x144'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-120x120.png',
			sizes: '120x120'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-152x152.png',
			sizes: '152x152'
		},
		{
			rel: 'apple-touch-icon',
			href: '/icons/apple-icon-180x180.png',
			sizes: '180x180'
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/icons/android-icon-192x192.png',
			sizes: '192x192'
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/icons/favicon-32x32.png',
			sizes: '32x32'
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/icons/favicon-96x96.png',
			sizes: '96x96'
		},
		{
			rel: 'icon',
			type: 'image/png',
			href: '/icons/favicon-16x16.png',
			sizes: '16x16'
		},
		{
			rel: 'icon',
			type: 'image/favicon',
			href: '/favicon.ico'
		},
		{
			rel: 'manifest',
			href: '/manifest.webmanifest'
		}
	]
} as DefaultSeoProps
