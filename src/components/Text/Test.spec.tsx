import { screen } from '@testing-library/react'
import { render } from '__mocks__/renderTheme'
import { Text } from '.'

describe('<Text/>', () => {
  it('should render a Text Component correctly', () => {
    render(<Text>I am a test</Text>)
    expect(
      screen.getByRole('paragraph', { name: ' I am a test' })
    ).toBeInTheDocument()
  })
})
