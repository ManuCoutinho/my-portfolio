import dynamic from 'next/dynamic'

const Header = dynamic(() => import('features/Header'), { ssr: false })
const Footer = dynamic(() => import('components/Footer'), { ssr: false })

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
