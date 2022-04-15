import { parseCookies, setCookie } from 'nookies'
import { createContext, useContext, useState } from 'react'
import { DefaultTheme } from 'styled-components'
import { combineTheme, light, dark } from '../../styles/theme'

type PropsContext = {
  userTheme: DefaultTheme
  setUserTheme: React.Dispatch<React.SetStateAction<DefaultTheme>>
  toggleTheme(theme: DefaultTheme): void
}

const DEFAULT_VALUE = {
  userTheme: combineTheme(dark),
  setUserTheme: () => {},
  toggleTheme: () => {}
}

export const SwitchThemeContext = createContext<PropsContext>(DEFAULT_VALUE)

export const SwitchThemeContextProvider: React.FC = ({ children }) => {
  const [userTheme, setUserTheme] = useState<DefaultTheme>(
    DEFAULT_VALUE.userTheme
  )

  const injectCookies = (customTheme: any) => {
    const cookies = parseCookies()
    setCookie(null, 'theme', customTheme, {
      path: '/',
      maxAge: 30 * 24 * 60 * 60, //30days
      sameSite: true
    })
  }
  function toggleTheme(theme: DefaultTheme) {
    if (theme.title === 'dark') {
      setUserTheme(combineTheme(light))
      injectCookies(combineTheme(light))
    }
    if (theme.title === 'light') {
      setUserTheme(combineTheme(dark))
      injectCookies(combineTheme(dark))
    }
  }

  return (
    <SwitchThemeContext.Provider
      value={{ userTheme, setUserTheme, toggleTheme }}
    >
      {children}
    </SwitchThemeContext.Provider>
  )
}
