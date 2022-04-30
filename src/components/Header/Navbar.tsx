import { Logo } from './Logo'
import { Menu } from './Menu'
import { Nav } from './styles'
import { ToggleProps } from './types'

export const Navbar: React.FC<ToggleProps> = ({ toggleTheme }) => {
  return (
    <Nav role='navigation' aria-label='Menu'>
      <Logo />
      <Menu toggleTheme={toggleTheme} />
    </Nav>
  )
}
