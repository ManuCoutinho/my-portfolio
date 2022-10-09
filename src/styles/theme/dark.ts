import { lighten } from 'polished'

const dark = {
  title: 'dark',
  colors: {
    black: '#090B09',
    white: '#FFFCF2',
    background: '#090B09',
    body: '#090B09',
    primary: '#1A7444',
    secondary: '#12BF62',
    text: '#DEE2E6',
    title: '#02C39A',
    info: '#78a590',
    highlight: 'rgba(15, 255, 103, 0.2)',
    active: '#37d27f',
    carousel_1: '#2D392D',
    carousel_2: '#080a08',
    carousel_3: 'rgba(10, 13, 10, 0.1)',
    carousel_4: 'rgba(255, 255, 255, 0.02)',
    bg_card: '#1F1F1F',
    glass: 'rgba(9, 11, 9, 0.65)',
    bg_modal: '#292929',
    disabled: lighten(0.5, '#1c1c1c'),
    border_1: 'rgba(15, 255, 103, 1)',
    border_2: '#37d27f'
  }
} as const

export default dark
