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
      <Menu toggleTheme={toggleTheme} />
    </Nav>
  )
}
