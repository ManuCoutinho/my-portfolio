import { Drawer } from 'components/Drawer'
import { Menu } from 'components/Menu'
import { ToggleTheme } from 'components/ToggleTheme'
import { ToggleLanguage } from 'components/ToggleLanguage'
import * as Styled from './styles'
import { useState } from 'react'

const Header: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<Styled.Header>
			<Styled.Nav role='navigation' aria-label='Main Menu'>
				<Styled.Logo>
					<a aria-label='logo Manu Coutinho' href='#'>
						Manu<span>Coutinho_</span>
					</a>
				</Styled.Logo>
				<Styled.NavList>
					<li role='menuitem' aria-label='toggle theme'>
						<ToggleTheme />
					</li>
					<li role='menuitem' aria-label='toggle language'>
						<ToggleLanguage />
					</li>
					<li role='menuitem' aria-label='toggle drawer'>
						<Drawer.Trigger open={isOpen} handleOpen={setIsOpen} />
					</li>
				</Styled.NavList>
				<Drawer.Content state={isOpen}>
					<Menu handleState={setIsOpen} />
				</Drawer.Content>
			</Styled.Nav>
		</Styled.Header>
	)
}

export default Header
