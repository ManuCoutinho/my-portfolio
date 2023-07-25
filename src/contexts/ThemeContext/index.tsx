import { createContext, ReactNode, useReducer, useEffect } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { parseCookies, setCookie } from 'nookies'
import GlobalStyle from 'styles/global'
import { combineTheme, light, dark } from 'styles/theme'
import { Action, ThemeContextType } from './types'

export const ThemeContext = createContext<ThemeContextType>(
	{} as ThemeContextType
)

const initialState = combineTheme(light)

function reducer(state: DefaultTheme, action: Action) {
	switch (action.type) {
		case 'dark':
			setCookie(null, 'ui_prefers', 'dark', {
				path: '/',
				maxAge: 30 * 24 * 60 * 60, //30days
				sameSite: 'Strict'
			})
			return combineTheme(dark)
		case 'light':
			setCookie(null, 'ui_prefers', 'light', {
				path: '/',
				maxAge: 30 * 24 * 60 * 60, //30days
				sameSite: 'Strict'
			})
			return combineTheme(light)
		default:
			return state
	}
}

export function ThemeContextProvider({ children }: { children: ReactNode }) {
	const [theme, toggleTheme] = useReducer(reducer, initialState)
	useEffect(() => {
		const cookies = parseCookies()

		cookies['ui_prefers'] === undefined
			? toggleTheme({ type: 'light' })
			: toggleTheme({ type: cookies['ui_prefers'] })
	}, [toggleTheme])
	return (
		<ThemeContext.Provider value={{ toggleTheme }}>
			<ThemeProvider theme={theme}>
				<GlobalStyle />
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
}
