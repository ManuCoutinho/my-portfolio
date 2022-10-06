import Head from 'next/head'
import dynamic from 'next/dynamic'
import { HomeSection } from 'features/HomeSection'
import { Container } from '../components/Layout/Base'

const About = dynamic(() => import('features/AboutSection'))
const Portfolio = dynamic(() => import('features/PortfolioSection'))
const Contact = dynamic(() => import('features/ContactSection'))
const Footer = dynamic(() => import('../components/Footer'))
const Header = dynamic(() => import('features/Header'))

export default function Home() {
  return (
    <main>
      <Head>
        <title>Manu Coutinho | Portfólio</title>
      </Head>
      <Header />
      <HomeSection />
      <Container>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Container>
    </main>
  )
}
