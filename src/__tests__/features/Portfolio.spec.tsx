import { screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { render } from '../../styles/theme/renderTheme'
import Portfolio from '../../features/PortfolioSection'

describe('<Portfolio/>', () => {
  it('should render a title section', () => {
    act(async () => {
      render(<Portfolio />)
      expect(
        await screen.findByRole('heading', { name: /portfólio/i })
      ).toBeInTheDocument()
    })
  })
  it('should render load more button correctly', () => {
    act(async () => {
      render(<Portfolio />)
      expect(
        await screen.findByRole('button', { name: /mostrar menos/i })
      ).toBeInTheDocument()
      expect(
        await screen.findByRole('button', { name: /mostrar mais/i })
      ).toBeInTheDocument()
    })
  })
})
