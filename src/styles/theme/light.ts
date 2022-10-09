import { lighten } from 'polished'
const light = {
  title: 'light',
  colors: {
    black: '#090B09',
    white: '#FAFAFF',
    background: '#EAAB99',
    body: '#F7F6F3',
    primary: '#817b92',
    secondary: '#6e758d',
    text: '#242b31',
    title: '#0A0A0A',
    info: '#56667c',
    highlight: 'rgba(38, 247, 240, 0.5)',
    carousel_1: '#DEDDDB',
    carousel_2: '#FFFFFF',
    carousel_3: '#CBCAC7',
    carousel_4: '#FFFFFF',
    active: ' #ff8c61',
    bg_card: '#f8e3dd',
    glass: 'rgba(234,171,153, 0.75)',
    bg_modal: '#F5D5CC',
    disabled: lighten(0.5, '#56667c'),
    border_1: '#ffaa99',
    border_2: '#ffac99'
  }
} as const

export default light
