import { ToggleTheme } from './ToggleTheme'
import { Logo } from './Logo'
import { Menu } from './Menu'
import { Nav } from './styles'

type Props = {
  toggleTheme(): void
}
export const Navbar: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Nav>
      <Logo />
      <Menu />
      <ToggleTheme toggleTheme={toggleTheme} />
    </Nav>
  )
}
