import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'
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
    render(<MenuButton open={true} handleOpen={mockFn(false)} />)
    const menuButton = screen.getByRole('button', { hidden: true })
    expect(menuButton).toHaveAttribute('aria-label', 'Fechar Menu')
    expect(menuButton?.firstChild).toHaveProperty('icon', icons.x)
  })
  it('should handle open a Menu component', async () => {
    const open = false
    render(<MenuButton open={open} handleOpen={mockFn(!open)} />)
    const menuButton = screen.getByRole('button', { hidden: true })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    userEvent.click(menuButton)
    expect(mockFn).toHaveBeenCalled()
    await waitFor(() => {
      expect(menuButton).toHaveAttribute('aria-label', 'Abrir Menu')
    })
  })
})
