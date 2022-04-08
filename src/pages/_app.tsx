import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import { light } from '../styles/theme/light'
import { dark } from '../styles/theme/dark'
import usePersistedState from '../components/Utils/usePesistedState'

function MyApp({ Component, pageProps }: AppProps) {
  // const [theme, setTheme] = usePersistedState('theme', light)

  // const toggleTheme = () => {
  //   setTheme(theme.title === 'dark' ? light : dark)
  // }

  return (
    <ThemeProvider theme={light}>
      <Component {...pageProps} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
