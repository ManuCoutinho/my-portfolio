import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import Header from '.'

describe('<Header/>', () => {
  it('should render a Header correctly', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
