import { lighten } from 'polished'

const dark = {
	title: 'dark',
	colors: {
		black: '#181919',
		white: '#FFFCF2',
		accent: '#e48c59',
		body: '#181919',
		primary: '#d5aa73',
		secondary: '#7c6f5f',
		text: '#e3d3b8',
		title: '#e3d3b8',
		info: '#434d56',
		highlight: 'rgba(204, 0, 133, 1)',
		active: '#c6752f',
		carousel_1: '#2D392D',
		carousel_2: '#080a08',
		carousel_3: 'rgba(24, 25, 25, 0.1)',
		carousel_4: 'rgba(255, 255, 255, 0.02)',
		bg_card: '#1F1F1F',
		glass: 'rgba(9, 11, 9, 0.65)',
		bg_modal: '#292929',
		disabled: lighten(0.5, '#1c1c1c')
	}
} as const

export default dark
