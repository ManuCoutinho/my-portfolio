import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Container } from '.'

describe('<Container/>', () => {
  it('should render a Container component correctly ', () => {
    const { container } = render(<Container>Text</Container>)
    expect(screen.getByTestId('container')).toBeInTheDocument()
    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="sc-6ea3e470-0 gQMznu"
        data-testid="container"
      >
        Text
      </section>
    `)
  })
})
