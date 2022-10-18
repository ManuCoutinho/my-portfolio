import { screen } from '@testing-library/react'
import { render } from '../../src/styles/theme/renderTheme'
import Portfolio from '../../src/features/PortfolioSection'

describe('<Portfolio/>', () => {
  it('should render a title section', () => {
    render(<Portfolio />)
    expect(
      screen.getByRole('heading', { name: /portfólio/i })
    ).toBeInTheDocument()
  })
  it('should render load more button correctly', () => {
    render(<Portfolio />)
    expect(
      screen.getByRole('button', { name: /mostrar menos/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /mostrar mais/i })
    ).toBeInTheDocument()
  })
})
