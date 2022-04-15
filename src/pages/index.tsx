import Head from 'next/head'
import { About } from '../components/AboutSection'
import { Banner } from '../components/HomeSection'
import { Container } from '../components/Layout/Base'

import { Portfolio } from '../components/PortfolioSection'
import { Contact } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Manu Coutinho</title>
      </Head>
      <Banner />
      <Container>
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </Container>
    </>
  )
}
