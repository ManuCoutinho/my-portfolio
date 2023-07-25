import { lighten } from 'polished'
const light = {
	title: 'light',
	colors: {
		black: '#353131',
		white: '#f3faf0',
		background: '#e48c59',
		body: '#f3faf0',
		primary: 'rgb(201, 100, 81)',
		secondary: '#ae6a40',
		text: '#003844',
		title: '#353131',
		info: '#8A5536',
		highlight: 'rgb(58, 12, 163, 0.5)',
		carousel_1: '#DEDDDB',
		carousel_2: '#f5f5f5',
		carousel_3: '#CBCAC7',
		carousel_4: '#f5f5f5',
		active: '#F05D51',
		bg_card: '#f8e3dd',
		glass: 'rgba(243, 250, 240, 0.1)',
		bg_modal: '#e19b76',
		disabled: lighten(0.5, '#56667c')
	}
} as const

export default light
