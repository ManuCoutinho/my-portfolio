import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
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
    }
    font: {
      text: string
      title: string
    }
    fontSize: {
      xs: string
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
      default: string
      medium: string
      full: string
    }
  }
}
