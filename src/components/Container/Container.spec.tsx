import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Container } from '.'

describe('<Container/>', () => {
  it('should render a Container component correctly ', () => {
    const { container } = render(<Container>Text</Container>)
    expect(screen.getByTestId('container')).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="sc-5bc047d-0 dHhhfO"
        data-testid="container"
      >
        Text
      </section>
    `)
  })
})
