import { Logo } from './Logo'
import { Menu } from './Menu'
import { Nav } from './styles'
import { ToggleProps } from './types'

export const Navbar: React.FC<ToggleProps> = ({ toggleTheme }) => {
  return (
    <Nav>
      <Logo />
      <Menu toggleTheme={toggleTheme} />
    </Nav>
  )
}
