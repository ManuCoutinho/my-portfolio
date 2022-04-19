import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@600;700&family=Montserrat+Alternates:ital,wght@0,400;1,100&display=swap'
            rel='stylesheet'
          />
          <link
            rel='icon'
            sizes='16x16'
            href='/assets/favicon.png'
            type='image/png'
          />
          <link rel='canonical' href='https://manucoutinho.github.io/' />
          <meta
            name='keywords'
            content='webdeveloper, web, developer, programador, desenvolvedor, manu coutinho, front-end, freelancer, freela, website, portfolio, ManuCoutinho, Emanuela Coutinho, react, html, inteface, site, site pessoal'
          />
          <meta name='copyright' content='ManuCoutinho 2022' />
          <meta http-equiv='content-language' content='pt-br' />
          <meta name='language' content='pt-br' />
          <meta name='theme-color' content='#EAAB99' />
          <meta property='og:title' content='Portfólio' />
          <meta
            property='og:description'
            content='Portfólio - Manu Coutinho | Desenvolvedora Front-End'
          />
          <meta property='og:image' content='https://imgur.com/a/dYFlfO4' />
          <meta name='author' content='Emanuela Coutinho' />
          <meta
            name='description'
            content='Portfólio de Emanuela Coutinho, Front-end developer. A Eu sou uma desenvolvedora front-end, movida por uma paixão em construir coisas capazes de integrar diversos universos por meio da tecnologia.'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
