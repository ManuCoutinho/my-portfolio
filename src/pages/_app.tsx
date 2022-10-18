import { AppProps } from 'next/app'
import GlobalContext from '../contexts'

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <GlobalContext>
      <Component {...pageProps} />
    </GlobalContext>
  )
}

export default MyApp
