import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import Contact from '../../features/ContactSection'

describe('<Contact/>', () => {
  it('should render title section ', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { name: /contato/i })
    ).toBeInTheDocument()
  })
  it('should render subtitle section ', () => {
    render(<Contact />)
    expect(
      screen.getByRole('heading', { name: /fale comigo!/i })
    ).toBeInTheDocument()
  })
  it('should render social contacts component', () => {
    const { container } = render(<Contact />)
    const socialContacts = screen.getByRole('navigation')
    expect(container).toContainElement(socialContacts)
    expect(socialContacts).toHaveStyle('flex-direction: row')
  })
  it('should render social contacts component with showEmail prop', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument()
  })
  it('should render a Text component with align correctly', () => {
    render(<Contact />)
    expect(
      screen.getByText(/Caso queira saber mais sobre o meu trabalho/i)
    ).toBeInTheDocument()
    expect(
      screen.getByText(/Caso queira saber mais sobre o meu trabalho/i)
    ).toHaveStyle('text-align: left')
  })
  it('should render a animation component', () => {
    render(<Contact />)
    const div = screen.getByTestId('box-animation')
    expect(div.firstChild).toHaveAttribute(
      'preserveAspectRatio',
      'xMidYMid meet'
    )
  })
})