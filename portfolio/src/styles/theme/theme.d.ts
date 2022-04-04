import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      black: string
      gray: {
        50: string
        100: string
        200: string
        300: string
      }
      green: {
        200: string
      }
      orange: {
        400: string
      }
      red: string
      white: string
    }
    font: string
    fontSize: {
      xs: string
      sm: string
      md: string
      lg: string
      xl: string
    }
    fontWeight: {
      light: number
      normal: number
      semibold: number
      bold: number
    }
    transition: string
    radius: string
  }
}
