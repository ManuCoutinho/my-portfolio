import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { StackBox } from '.'

describe('<StackBox/>', () => {
  it('should render a StackBox component correctly', () => {
    render(<StackBox>Text</StackBox>)
    expect(screen.getByTestId('stackbox')).toMatchSnapshot()
  })

  it('should render a StackBox with column props', () => {
    render(<StackBox direction='column'>Text</StackBox>)
    expect(screen.getByTestId('stackbox')).toHaveStyle('flex-direction:column')
  })
  it('should render a StackBox with as props', () => {
    const att = 'section'
    render(<StackBox as={att} />)
    expect(screen.getByTestId('stackbox')).toBeInTheDocument()
  })
})
