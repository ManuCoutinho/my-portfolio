import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { AnimatedText } from '.'

describe('<AnimatedText/>', () => {
  it('should render text correctly ', () => {
    render(<AnimatedText />)
    expect(screen.getByText(/hi, i am/i)).toBeInTheDocument()
  })
})
