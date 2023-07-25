import { useEffect, useContext } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import nookies from 'nookies'
import { ThemeContext } from 'contexts/ThemeContext'

import HomeTemplate from 'templates/Home'

const Home: NextPage<{ theme: string }> = ({ theme }) => {
	const { toggleTheme } = useContext(ThemeContext)

	useEffect(() => {
		const osTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'
		theme == null
			? toggleTheme({ type: osTheme })
			: toggleTheme({ type: theme })
	}, [theme, toggleTheme])

	return <HomeTemplate />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const cookies = nookies.get(ctx)
	return {
		props: {
			theme: cookies['ui_prefers'] ?? null
		}
	}
}
export default Home
