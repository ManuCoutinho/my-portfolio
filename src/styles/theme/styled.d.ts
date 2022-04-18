import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    title: string
    colors: {
      black: string
      white: string
      background: string
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
    }
    font: {
      text: string
      title: string
    }
    fontSize: {
      xsm: string
      sm: string
      md: string
      lg: string
      xl: string
      xlg: string
    }
    fontWeight: {
      light: number
      normal: number
      semibold: number
      bold: number
    }
    transition: string
    radius: {
      small: string
      default: string
      medium: string
      full: string
    }
  }

  export interface CustomTheme {
    title: string
    colors: {
      black: string
      white: string
      background: string
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
    }
  }
}
