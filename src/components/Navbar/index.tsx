import { Menu } from '../Menu'
import { Logo } from '../Logo'
import * as Styled from './styles'
export const Navbar: React.FC = () => {
  return (
    <Styled.Nav role='navigation' aria-label='Menu'>
      <Logo />
      <Menu />
    </Styled.Nav>
  )
}
