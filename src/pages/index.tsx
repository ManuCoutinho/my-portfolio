import Head from 'next/head'
import dynamic from 'next/dynamic'
import { Banner } from '../components/HomeSection'
import { Container } from '../components/Layout/Base'
import { GetServerSideProps } from 'next'
import nookies from 'nookies'


const About = dynamic(() => import('../components/AboutSection'))
const Portfolio = dynamic(() => import('../components/PortfolioSection'))
const Contact = dynamic(() => import('../components/ContactSection'))
const Footer = dynamic(() => import('../components/Footer'))
const Header = dynamic(() => import('../components/Header'))


export default function Home() {
  return (
    <>
      <Head>        
        <title>Manu Coutinho | Home</title>
      </Head>
      <Header/>
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
export const getServerSideProps:GetServerSideProps = async (ctx) =>{
  const cookies = nookies.get(ctx)
return {
  props:{
    theme: cookies.theme
  }
}
}

