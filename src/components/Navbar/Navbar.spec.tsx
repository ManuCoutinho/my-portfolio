import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Navbar } from '.'

describe('<Navbar/>', () => {
  it('should render a Navbar component correctly', () => {
    render(<Navbar>Text</Navbar>)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
  it('should render a Navbar component with a aria label attribute', () => {
    render(<Navbar>Text</Navbar>)
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Menu')
  })
  it('should the Navbar component match to snapshot', () => {
    const { container } = render(<Navbar>Text</Navbar>)
    expect(container).toMatchSnapshot()
  })
})
