import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import Footer from '.'

describe('<Footer/>', () => {
  it('should render a footer component correctly', () => {
    const { container } = render(<Footer />)
    expect(screen.getByTestId('footer')).toHaveTextContent(
      /Copyright © 2022 Todos os direitos reservados./i
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
