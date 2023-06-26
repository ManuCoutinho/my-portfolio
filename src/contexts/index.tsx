import { DataContextProvider } from './DataContext/DataContext'
import { ThemeContextProvider } from './ThemeContext'

const GlobalContext: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <ThemeContextProvider>
      <DataContextProvider>{children}</DataContextProvider>
    </ThemeContextProvider>
  )
}

export default GlobalContext
