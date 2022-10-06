import { ModalContextProvider } from './ModalContext/DataContext'
import { ThemeContextProvider } from './ThemeContext'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <ModalContextProvider>{children}</ModalContextProvider>
    </ThemeContextProvider>
  )
}

export default GlobalContext
