import { render } from '../../styles/theme/renderTheme'
import Footer from '.'

describe('<Footer/>', () => {
  it('should render a footer component correctly', () => {
    const { container } = render(<Footer />)
    expect(container.firstChild).toHaveTextContent(
      /Copyright © 2022 Todos os direitos reservados./i
    )
    expect(container).toMatchSnapshot()
  })
})
