import dynamic from 'next/dynamic'
import { Main } from './styles'

const Header = dynamic(() => import('features/Header'), { ssr: false })
const Footer = dynamic(() => import('components/Footer'), { ssr: false })

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<Main>
			<Header />
			{children}
			<Footer />
		</Main>
	)
}

export default Layout
