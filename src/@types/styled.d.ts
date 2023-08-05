import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme extends CustomTheme {
		title: string

		font: {
			regular: string
			cursive: string
		}
		fontSize: {
			xsm: string
			sm: string
			md: string
			wd: string
			lg: string
			xl: string
			xlg: string
		}
		fontWeight: {
			thin: number
			light: number
			regular: number
			semibold: number
			bold: number
		}
		radius: {
			sm: string
			md: string
			pill: string
			full: string
		}
	}

	export interface CustomTheme {
		title: string
		colors: {
			black: string
			white: string
			accent: string
			body: string
			primary: string
			secondary: string
			text: string
			title: string
			info: string
			highlight: string
			carousel_1: string
			carousel_2: string
			carousel_3: string
			carousel_4: string
			bg_card: string
			glass: string
			bg_modal: string
			disabled: string
			active: string
		}
	}
}
