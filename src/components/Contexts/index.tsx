import { ModalContextProvider } from './ModalContext/DataContext'

const GlobalContext: React.FC = ({ children }) => {
  return (
    <>
      <ModalContextProvider>{children}</ModalContextProvider>
    </>
  )
}

export default GlobalContext
