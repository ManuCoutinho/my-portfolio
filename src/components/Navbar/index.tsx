import { Menu } from '../Menu'
import * as Styled from './styles'

export const Navbar: React.FC = () => {
	return (
		<Styled.Nav role='navigation' aria-label='Menu'>
			<Styled.Logo>
				<p aria-label='logo Manu Coutinho'>
					Manu<span>Coutinho_</span>
				</p>
			</Styled.Logo>
			<Menu />
		</Styled.Nav>
	)
}
