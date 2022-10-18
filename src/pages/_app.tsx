import { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import GlobalContext from '../contexts'

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <Fragment>
      <Head>
        <link
          rel='icon'
          sizes='16x16'
          href='/assets/favicon.png'
          type='image/png'
        />
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
      </Head>
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
    </Fragment>
  )
}

export default MyApp
