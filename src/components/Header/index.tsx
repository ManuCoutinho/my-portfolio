import { Navbar } from './Navbar'
import { Container } from './styles'

type Props = {
  toggleTheme(): void
}
export const Header: React.FC<Props> = ({ toggleTheme }) => {
  return (
    <Container>
      <Navbar toggleTheme={toggleTheme} />
    </Container>
  )
}
