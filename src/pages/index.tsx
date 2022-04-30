import Head from 'next/head'
import dynamic from 'next/dynamic'
import GlobalContext from '../components/Contexts'
import { Banner } from '../components/HomeSection'
import { Container } from '../components/Layout/Base'

const About = dynamic(() => import('../components/AboutSection'))
const Portfolio = dynamic(() => import('../components/PortfolioSection'))
const Contact = dynamic(() => import('../components/ContactSection'))
const Footer = dynamic(() => import('../components/Footer'))

export default function Home() {
  return (
    <GlobalContext>
      <Head>
        <link rel='canonical' href='https://manucoutinho.vercel.app/' />
        <meta
          name='keywords'
          content='webdeveloper, web, developer, programador, desenvolvedor, manu coutinho, front-end, freelancer, freela, website, portfolio, ManuCoutinho, Emanuela Coutinho, react, html, inteface, site, site pessoal'
        />
        <meta name='copyright' content='ManuCoutinho 2022' />
        <meta httpEquiv='content-language' content='pt-br' />
        <meta name='language' content='pt-br' />
        <meta name='theme-color' content='#EAAB99' />
        <meta property='og:title' content='Portfólio' />
        <meta
          property='og:description'
          content='Portfólio - Manu Coutinho | Desenvolvedora Front-End'
        />
        <meta property='og:image' content='/assets/preview.png' />
        <meta name='author' content='Emanuela Coutinho' />
        <meta
          name='description'
          content='Portfólio de Emanuela Coutinho, Front-end developer. A Eu sou uma desenvolvedora front-end, movida por uma paixão em construir coisas capazes de integrar diversos universos por meio da tecnologia.'
        />
        <title>Manu Coutinho</title>
      </Head>
      <Banner />
      <Container>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Container>
    </GlobalContext>
  )
}
