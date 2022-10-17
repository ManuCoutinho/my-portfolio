import { screen, fireEvent } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { ToggleTheme } from '.'
import icons from 'constants/icons'

describe('<ToggleTheme/>', () => {
  it('should render a  Toggle Theme component correctly', () => {
    render(<ToggleTheme />)
    expect(screen.getByRole('switch')).toBeInTheDocument()
  })
  it('should render a  Toggle Theme with right Icon', () => {
    render(<ToggleTheme />)
    expect(screen.getByRole('switch').firstChild).not.toHaveAttribute(
      'icon',
      icons.sun
    )
  })
  it('should render a  switch icon correctly', () => {
    render(<ToggleTheme />)
    const button = screen.getByRole('switch')
    fireEvent.click(button)
    expect(screen.getByRole('switch').firstChild).toHaveAttribute(
      'icon',
      icons.sun
    )
  })
  it('should the Toggle Theme match to snapshot', () => {
    const { container } = render(<ToggleTheme />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
