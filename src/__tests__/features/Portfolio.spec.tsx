import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import Portfolio from '../../features/PortfolioSection'

describe('<Portfolio/>', () => {
  it('should render ', () => {
    render(<Portfolio />)
    expect(
      screen.getByRole('heading', { name: /portfólio/i })
    ).toBeInTheDocument()
  })
})
