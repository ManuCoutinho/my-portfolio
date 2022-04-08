import { About } from '../components/AboutSection'
import { Banner } from '../components/HomeSection'
import { Container } from '../components/Foundation/Base'
import { Header } from '../components/Header'
import { Portfolio } from '../components/PortfolioSection'
import { Contact } from '../components/ContactSection'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
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
