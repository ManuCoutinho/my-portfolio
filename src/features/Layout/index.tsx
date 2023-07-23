import dynamic from 'next/dynamic'

const Header = dynamic(() => import('features/Header'))
const Footer = dynamic(() => import('components/Footer'))

function Layout({ children }: { children: React.ReactNode }): JSX.Element {
	return (
		<main>
			<Header />
			{children}
			<Footer />
		</main>
	)
}

export default Layout
