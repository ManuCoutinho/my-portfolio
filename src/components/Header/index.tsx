import { Navbar } from './Navbar'
import { Container } from './styles'
import { ToggleProps } from './types'

export const Header: React.FC<ToggleProps> = ({ toggleTheme }) => {
  return (
    <Container>
      <Navbar toggleTheme={toggleTheme} />
    </Container>
  )
}
