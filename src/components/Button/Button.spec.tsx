import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'

import { Button } from '.'

describe('<Button/>', () => {
  it('should render a button correctly', () => {
    render(<Button>Text</Button>)
    expect(screen.getByRole('button')).toHaveTextContent(/Text/i)
  })
  it('should button component match to snapshot', () => {
    const { container } = render(<Button>Text</Button>)
    expect(container).toMatchSnapshot()
  })
})
