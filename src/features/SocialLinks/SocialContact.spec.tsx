import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { SocialLinks } from '.'

describe('<SocialLinks/>', () => {
	it('should render with all links', () => {
		render(<SocialLinks direction='row' />)

		expect(screen.getByRole('link', { name: /email/i })).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /github/i })).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /dev.to/i })).toBeInTheDocument()
		expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
	})
	it('should render without email and twitter icons', () => {
		render(<SocialLinks direction='row' hideIcon={['twitter', 'email']} />)

		expect(
			screen.queryByRole('link', { name: /email/i })
		).not.toBeInTheDocument()
		expect(
			screen.queryByRole('link', { name: /twitter/i })
		).not.toBeInTheDocument()
		expect(screen.queryByRole('switch')).not.toBeInTheDocument()
		expect(screen.getByRole('link', { name: /github/ })).toBeInTheDocument()
	})
	it('should render with toggle icon', () => {
		render(<SocialLinks direction='column' showToggle />)
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = render(<SocialLinks direction='row' />)

		expect(container).toMatchSnapshot()
	})
})
