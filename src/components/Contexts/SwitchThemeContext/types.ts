import { DefaultTheme } from "styled-components"

export interface SwitchThemeType {
  theme: DefaultTheme
  toggleTheme: () => void
}