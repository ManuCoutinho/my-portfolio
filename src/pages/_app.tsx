import { AppProps } from 'next/app'
import GlobalContext from '../components/Contexts'




import GlobalStyle from '../styles/global'



const MyApp: React.FC<AppProps> = ({ pageProps, Component}) => {

  return (
    <GlobalContext>       
      <Component {...pageProps} />
      <GlobalStyle />     
    </GlobalContext>
  )
}

export default MyApp