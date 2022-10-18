import { render } from '../../styles/theme/renderTheme'
import { MenuButton } from '.'
import icons from 'constants/icons'

const mockFn = jest.fn()

describe('<MenuButton/>', () => {
  it('should render a Menu button correctly', () => {
    const { container } = render(<MenuButton open={true} handleOpen={mockFn} />)
    const menuButton = container.firstElementChild
    expect(menuButton).toHaveAttribute('aria-labelledby', 'menu button')
  })
  it('should render a closed Menu button', () => {
    const { container } = render(
      <MenuButton open={false} handleOpen={mockFn(!false)} />
    )
    const menuButton = container.firstElementChild
    expect(menuButton).toHaveAttribute('aria-label', 'Abrir Menu')
    expect(menuButton?.firstChild).toHaveProperty('icon', icons.hamburger)
  })
  it('should render a opened Menu button', () => {
    const { container } = render(
      <MenuButton open={true} handleOpen={mockFn(!true)} />
    )
    const menuButton = container.firstElementChild
    expect(menuButton).toHaveAttribute('aria-label', 'Fechar Menu')
    expect(menuButton?.firstChild).toHaveProperty('icon', icons.x)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
