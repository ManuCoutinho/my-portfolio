import { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'
import GlobalContext from '../contexts'

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <Fragment>
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
        <link
          rel='apple-touch-icon'
          sizes='57x57'
          href='/apple-icon-57x57.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='60x60'
          href='/apple-icon-60x60.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='72x72'
          href='/apple-icon-72x72.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='76x76'
          href='/apple-icon-76x76.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='114x114'
          href='/apple-icon-114x114.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='120x120'
          href='/apple-icon-120x120.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='144x144'
          href='/apple-icon-144x144.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/apple-icon-152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-icon-180x180.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='192x192'
          href='/android-icon-192x192.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='96x96'
          href='/favicon-96x96.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
      </Head>
      <GlobalContext>
        <Component {...pageProps} />
      </GlobalContext>
    </Fragment>
  )
}

export default MyApp
