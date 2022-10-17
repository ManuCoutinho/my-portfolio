import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Logo } from '.'

describe('<Logo/>', () => {
  it('should render a Logo component correctly', () => {
    render(<Logo>Text</Logo>)
    expect(screen.getByRole('link')).toHaveTextContent(/Manu/i)
  })
  it('should render a Logo with anchor', () => {
    render(<Logo>Text</Logo>)
    expect(screen.getByRole('link')).toHaveAttribute('href')
  })
  it('should the Logo component match to snapshot', () => {
    const { container } = render(<Logo>Text</Logo>)
    expect(container).toMatchSnapshot()
  })
})
