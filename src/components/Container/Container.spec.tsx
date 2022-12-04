import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Container } from '.'

describe('<Container/>', () => {
  it('should render a Container component correctly ', () => {
    render(<Container>Text</Container>)
    expect(screen.getByTestId('container')).toBeInTheDocument()
  })
})
