import { render, screen } from '../../styles/theme/renderTheme'
import { MenuButton } from '.'
import icons from 'constants/icons'

const mockFn = jest.fn()

describe('<MenuButton/>', () => {
  it('should render a closed Menu button', () => {
    render(<MenuButton open={false} handleOpen={mockFn(!false)} />)
    const menuButton = screen.getByRole('button', {
      hidden: true,
      expanded: false
    })
    expect(menuButton).toHaveAttribute('aria-label', 'Abrir Menu')
    expect(menuButton?.firstChild).toHaveProperty('icon', icons.hamburger)
  })
  it('should render a opened Menu button', () => {
    render(<MenuButton open={true} handleOpen={mockFn(!true)} />)
    const menuButton = screen.getByRole('button', {
      hidden: true,
      expanded: false
    })
    expect(menuButton).toHaveAttribute('aria-label', 'Fechar Menu')
    expect(menuButton?.firstChild).toHaveProperty('icon', icons.x)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
