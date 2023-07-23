import Script from 'next/script'
import dynamic from 'next/dynamic'
import {
	CorporateContactJsonLd,
	NextSeo,
	SocialProfileJsonLd,
	WebPageJsonLd
} from 'next-seo'
import links from 'constants/links'
import SEO from 'constants/seo'
const About = dynamic(() => import('views/AboutSection'))
const Portfolio = dynamic(() => import('views/PortfolioSection'))
const Contacts = dynamic(() => import('views/ContactSection'))
const HomeSection = dynamic(() => import('views/HomeSection'))
const Layout = dynamic(() => import('features/Layout'))

export default function Home() {
	const linkName = links.map(({ name }) => name)

	return (
		<Layout>
			<NextSeo
				title={`${SEO.title} | Home`}
				description={SEO.description}
				canonical={SEO.canonical}
				themeColor={SEO.color}
				additionalMetaTags={[
					{
						property: 'keywords',
						content: `${SEO.keywords}`
					}
				]}
			/>
			<SocialProfileJsonLd
				type='Person'
				name='Emanuela Coutinho'
				url={process.env.NEXT_PUBLIC_CANONICAL ?? ''}
				sameAs={[...linkName]}
			/>
			<CorporateContactJsonLd
				url={process.env.NEXT_PUBLIC_CANONICAL ?? ''}
				contactPoint={[
					{
						contactType: 'customer service',
						email: links.find((data) => data.name === 'email')?.url,
						availableLanguage: ['Portuguese', 'English']
					}
				]}
			/>
			<WebPageJsonLd
				id='https://www.manucoutinho.com'
				description='Como criar um website?'
				lastReviewed='2023-05-20T17:30:43.016Z'
				reviewedBy={{
					type: 'Person',
					name: 'Emanuela Coutinho'
				}}
			/>
			<HomeSection />
			<About />
			<Portfolio />
			<Contacts />
			<Script
				strategy='lazyOnload'
				async
				src='https://www.googletagmanager.com/gtag/js?id=G-JCR3E3MV6M'
			/>
			<Script id='google-tag' strategy='lazyOnload'>
				{`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JCR3E3MV6M');`}
			</Script>
		</Layout>
	)
}
