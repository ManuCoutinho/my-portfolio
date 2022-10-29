import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Carousel } from '.'

describe('<Carousel />', () => {
  it('should render a title section', () => {
    render(<Carousel />)
    expect(
      screen.getByRole('heading', { name: /minhas skills/i })
    ).toBeInTheDocument()
  })
  it('should render a slider', () => {
    render(<Carousel />)
    expect(screen.getByTestId('slider')).toBeInTheDocument()
    expect(screen.getByTestId('slider')).toHaveClass('keen-slider')
  })
  it('should match to snapshot', () => {
    const { container } = render(<Carousel />)
    expect(container).toMatchSnapshot()
  })
})
