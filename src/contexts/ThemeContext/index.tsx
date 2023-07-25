import { createContext, ReactNode, useReducer } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { setCookie } from 'nookies'
import GlobalStyle from 'styles/global'
import { combineTheme, light, dark } from 'styles/theme'
import { Action, ThemeContextType } from './types'

export const ThemeContext = createContext<ThemeContextType>(
	{} as ThemeContextType
)

function reducer(state: DefaultTheme, action: Action) {
	switch (action.type) {
		case 'dark':
			setCookie(null, 'ui_prefers', 'dark', {
				path: '/',
				maxAge: 30 * 24 * 60 * 60, //30days
				sameSite: 'strict'
			})
			return combineTheme(dark)
		case 'light':
			setCookie(null, 'ui_prefers', 'light', {
				path: '/',
				maxAge: 30 * 24 * 60 * 60, //30days
				sameSite: 'strict'
			})
			return combineTheme(light)
		default:
			return state
	}
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
	const [theme, toggleTheme] = useReducer(reducer, combineTheme(light))

	return (
		<ThemeContext.Provider value={{ toggleTheme }}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}
