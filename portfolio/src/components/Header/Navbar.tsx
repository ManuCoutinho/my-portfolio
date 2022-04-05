import { Logo } from './Logo'
import { Menu } from './Menu'
import { Nav } from './styles'

export const Navbar: React.FC = () => {
  return (
    <Nav>
      <Logo />
      <Menu />
    </Nav>
  )
}
