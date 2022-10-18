import { screen } from '@testing-library/react'
import { render } from '../../src/styles/theme/renderTheme'
import { Description } from '../../src/features/Description'

describe('<Description/>', () => {
  it('should render correctly', () => {
    render(<Description />)
    const content = screen.getByTestId('stackbox')
    const heading = screen.getByRole('heading')
    expect(content).toBeInTheDocument()
    expect(content).toContainElement(heading)
  })
  it('should match to snapshot', () => {
    const { container } = render(<Description />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
