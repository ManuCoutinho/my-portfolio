import { ModalContextProvider } from './ModalContext/DataContext'
import { SwitchThemeContextProvider } from './SwitchThemeContext'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <SwitchThemeContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </SwitchThemeContextProvider>
  )
}

export default GlobalContext
