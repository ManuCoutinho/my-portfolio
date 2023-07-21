import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import About from '../../views/AboutSection'

describe('<About />', () => {
  it('should render About section components correctly', () => {
    render(<About />)
    expect(screen.getByRole('heading', { name: /sobre/i })).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /girl coding with cup of coffee/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('definition')).toBeInTheDocument()
    expect(screen.getByTestId('slider')).toBeInTheDocument()
  })
  it('should match to snapshot', () => {
    const { container } = render(<About />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
