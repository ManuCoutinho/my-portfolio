import { screen } from '@testing-library/react'
import { render } from '../../__mocks__/customRender'
import HomeSection from '.'

describe('<HomeSection/>', () => {
	it('should render a animated text', () => {
		const { container } = render(<HomeSection />)
		const animatedText = screen.getByTestId('animated-text')
		expect(container.firstChild).toContainElement(animatedText)
	})
	it('should render a link to portfolio section', () => {
		render(<HomeSection />)
		expect(
			screen.getByRole('link', {
				hidden: true,
				name: /ir para portfólio/i
			})
		).toBeInTheDocument()
	})
	it('should render social contacts component', () => {
		const { container } = render(<HomeSection />)
		const socialContacts = screen.getByRole('navigation')
		expect(container).toContainElement(socialContacts)
	})
	it('should render social contacts component with showToggle prop', () => {
		render(<HomeSection />)
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})
})
