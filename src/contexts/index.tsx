import { SwitchThemeContextProvider } from './SwitchThemeContext'

const GlobalContext: React.FC = ({ children }) => {
  return <SwitchThemeContextProvider>{children}</SwitchThemeContextProvider>
}

export default GlobalContext
