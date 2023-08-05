import { Icon } from '@iconify-icon/react'

import icons from 'constants/icons'
import { DrawerProps, ToggleProps } from './types'
import * as Styled from './styles'

function Root({ state, children }: DrawerProps): JSX.Element {
	return (
		<Styled.Wrapper data-state={state ? 'opened' : 'close'}>
			{children}
		</Styled.Wrapper>
	)
}

function Toggle({ open, handleOpen }: ToggleProps): JSX.Element {
	let expanded = false
	const activeAria = open ? 'Fechar Menu' : 'Abrir Menu'

	const toggleMenu = (event: React.SyntheticEvent) => {
		if (event.type === 'touchstart') {
			event.preventDefault()
		}
		if (event.type === 'clickaway') {
			handleOpen(!open)
		}
		handleOpen(!open)
		expanded = true
	}

	return (
		<Styled.ButtonIcon
			aria-expanded={expanded}
			aria-controls='menu'
			aria-haspopup
			aria-label={activeAria}
			role='button'
			aria-hidden='true'
			onClick={toggleMenu}
		>
			{!open ? <Icon icon={icons.hamburger} /> : <Icon icon={icons.x} />}
		</Styled.ButtonIcon>
	)
}

Root.displayName = 'Drawer'
export const Drawer = {
	Content: Root,
	Trigger: Toggle
}
