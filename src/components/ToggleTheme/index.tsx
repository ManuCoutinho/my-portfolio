import { useContext, FC } from 'react'
import { Icon } from '@iconify-icon/react'
import { useTheme } from 'styled-components'
import { ThemeContext } from 'contexts/ThemeContext'
import icons from 'constants/icons'
import * as Styled from './styles'

export const ToggleTheme: FC = () => {
	const { toggleTheme } = useContext(ThemeContext)
	const { title } = useTheme()
	let checked = false
	const handleChangeTheme = () => {
		toggleTheme({ type: title === 'light' ? 'dark' : 'light' })
		checked = true
	}
	return (
		<Styled.Switch
			type='button'
			onClick={handleChangeTheme}
			role='switch'
			aria-checked={checked}
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
