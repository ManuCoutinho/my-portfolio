import { screen } from '@testing-library/react'
import { render } from '../../src/styles/theme/renderTheme'
import Header from '../../src/features/Header'

describe('<Header/>', () => {
  it('should render a Header correctly', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
