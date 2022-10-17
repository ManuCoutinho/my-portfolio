import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { Heading } from '.'

describe('<Heading/>', () => {
  it('should render a Heading component correctly ', () => {
    const { container } = render(
      <Heading as='h2' size='big'>
        Text
      </Heading>
    )
    expect(screen.getByRole('heading', { name: /Text/i })).toBeInTheDocument()
    expect(container).toMatchSnapshot()
  })
})
