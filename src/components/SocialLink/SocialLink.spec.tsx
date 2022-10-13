import { render } from '../../styles/theme/renderTheme'
import { SocialLink } from '.'

describe('<SocialLink/>', () => {
  it('should render a Social Link component correctly', () => {
    const { container } = render(<SocialLink url='#'>Text</SocialLink>)
    expect(container.firstChild).toHaveTextContent(/Text/i)
  })
  it('should render a Social Link have a correctly attributes', () => {
    const { container } = render(<SocialLink url='#'>Text</SocialLink>)
    expect(container.firstChild).toHaveAttribute('target', '_blank')
    expect(container.firstChild).toHaveAttribute('rel', 'noopener noreferrer')
  })
  it('should the Social Link component match to snapshot', () => {
    const { container } = render(<SocialLink url='#'>Text</SocialLink>)
    expect(container).toMatchSnapshot()
  })
})
