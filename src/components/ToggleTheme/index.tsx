import { useContext, FC, useCallback } from 'react'
import { Icon } from '@iconify-icon/react'
import { useTheme } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'
import icons from 'constants/icons'
import * as Styled from './styles'

export const ToggleTheme: FC = () => {
	const { toggleTheme } = useContext(ThemeContext)
	const { title } = useTheme()

	const handleChangeTheme = useCallback(() => {
		toggleTheme({ type: title === 'light' ? 'dark' : 'light' })
	}, [title, toggleTheme])

	return (
		<Styled.Switch
			type='button'
			onClick={handleChangeTheme}
			role='switch'
			aria-label='switch theme'
		>
			{title === 'light' ? (
				<Icon icon={icons.sun} />
			) : (
				<Icon icon={icons.moon} />
			)}
		</Styled.Switch>
	)
}
