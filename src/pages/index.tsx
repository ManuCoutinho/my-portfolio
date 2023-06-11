import Script from 'next/script'
import dynamic from 'next/dynamic'
import { CorporateContactJsonLd, SocialProfileJsonLd } from 'next-seo'
import { HomeSection } from 'features/HomeSection'
import { Container } from 'components/Container/styles'
import links from 'constants/links'

const About = dynamic(() => import('features/AboutSection'))
const Portfolio = dynamic(() => import('features/PortfolioSection'))
const Contact = dynamic(() => import('features/ContactSection'))
const Footer = dynamic(() => import('components/Footer'))
const Header = dynamic(() => import('features/Header'))

export default function Home() {
  return (
    <main>
      <SocialProfileJsonLd
        type='Person'
        name='Emanuela Coutinho'
        url={process.env.NEXT_PUBLIC_CANONICAL ?? ''}
        sameAs={[links.linkedin, links.twitter, links.git, links.devto]}
      />
      <CorporateContactJsonLd
        url={process.env.NEXT_PUBLIC_CANONICAL ?? ''}
        contactPoint={[
          {
            contactType: 'customer service',
            email: links.email,
            availableLanguage: ['Portuguese', 'English']
          }
        ]}
      />
      <Header />
      <HomeSection />
      <Container>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Container>
      <Script id='google-tag' strategy='lazyOnload'>
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JCR3E3MV6M');`}
      </Script>
    </main>
  )
}
