import { DataContextProvider } from './DataContext/DataContext'
import { ThemeContextProvider } from './ThemeContext'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <ThemeContextProvider>
      <DataContextProvider>{children}</DataContextProvider>
    </ThemeContextProvider>
  )
}

export default GlobalContext
