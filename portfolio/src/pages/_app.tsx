import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { themeBase } from '../styles/theme/themeBase'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={themeBase}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
