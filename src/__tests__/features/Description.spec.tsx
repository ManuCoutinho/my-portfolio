import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Description } from '../../features/Description'

describe('<Description/>', () => {
  it('should render correctly', () => {
    render(<Description animate={true} />)
    const content = screen.getByRole('definition')
    const heading = screen.getByRole('heading')
    expect(content).toBeInTheDocument()
    expect(content).toContainElement(heading)
  })
  it('should match to snapshot', () => {
    const { container } = render(<Description animate={true} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
