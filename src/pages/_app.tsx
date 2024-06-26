import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import ErrorBoundary from 'modules/ErrorBoundary'
import GlobalContext from '../contexts'
import SEO from '../../config/next-seo.config'

const MyApp: React.FC<AppProps> = ({ pageProps, Component }) => {
	return (
		<ErrorBoundary>
			<DefaultSeo {...SEO} />
			<GlobalContext>
				<Component {...pageProps} />
			</GlobalContext>
		</ErrorBoundary>
	)
}

export default MyApp
