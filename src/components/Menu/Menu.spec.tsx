import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Menu } from '.'

describe('<Menu/>', () => {
  it('should render a Menu correctly', () => {
    render(<Menu />)
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })
  it('should render list item correctly', () => {
    render(<Menu />)
    expect(screen.getByRole('menu').firstChild).toHaveAttribute(
      'role',
      'listitem'
    )
  })
  it('should render a menu link correctly', () => {
    render(<Menu />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '/#home')
  })
})
