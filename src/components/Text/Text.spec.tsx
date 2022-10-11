import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Text } from '.'

describe('<Text/>', () => {
  it('should render correctly', () => {
    render(<Text>Text</Text>)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
  it('should render with text align prop', () => {
    const text = render(<Text align='center'>Text</Text>)
    debug(text)
    //  expect(screen.getByText('Text')).toHaveStyle({"text-align: center"})
  })
})
