import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Text } from '.'

describe('<Text/>', () => {
  it('should render ', () => {
    render(<Text>Text</Text>)
    expect(screen.getByText('Text')).toBeInTheDocument()
  })
})
