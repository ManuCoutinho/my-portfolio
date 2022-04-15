import { useState } from 'react'
import { AppProps } from 'next/app'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { parseCookies, setCookie } from 'nookies'
import { Header } from '../components/Header'

import GlobalStyle from '../styles/global'
import { combineTheme, light, dark } from '../styles/theme'

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  const cookies = parseCookies()

  const userTheme = cookies.theme === 'dark' ? dark : light

  const [theme, setTheme] = useState<DefaultTheme>(combineTheme(userTheme))

  function toggleTheme() {
    if (theme.title === 'dark') {
      setCookie(null, 'theme', 'light', {
        path: '/',
        maxAge: 30 * 24 * 60 * 60, //30days
        sameSite: true
      })
      return setTheme(combineTheme(light))
    }
    if (theme.title === 'light') {
      setCookie(null, 'theme', 'dark', {
        path: '/',
        maxAge: 30 * 24 * 60 * 60, //30days
        sameSite: true
      })
      return setTheme(combineTheme(dark))
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
