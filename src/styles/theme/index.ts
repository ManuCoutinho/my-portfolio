import { DefaultTheme, CustomTheme } from 'styled-components'
import dark from './dark'
import light from './light'

export type Theme = typeof defaultTheme

const defaultTheme = {
	font: {
		cursive:
			"'Montserrat Alternates', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Opens Sans', 'Helvetica Neue', sans-serif",
		regular:
			"'Josefin Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, 'Opens Sans', 'Helvetica Neue', sans-serif"
	},
	fontSize: {
		xsm: '0.5rem', //8px
		sm: '0.875rem', //14px
		md: '1rem', //16px
		wd: '1.25rem', //20px
		lg: '1.5rem', //24px
		xl: '2rem', //36px
		xlg: '3rem' //48px
	},
	fontWeight: {
		thin: 100,
		light: 200,
		regular: 400,
		semibold: 600,
		bold: 700
	},
	radius: {
		sm: '8px',
		md: '16px',
		pill: '25px',
		full: '50%'
	}
} as const

function combineTheme(theme: CustomTheme): DefaultTheme {
	return { ...defaultTheme, ...theme }
}
export { combineTheme, dark, light }
