import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import mockRouter from 'next-router-mock'
import HomeSection from '.'

jest.mock('next/router', () => require('next-router-mock'))

describe('<HomeSection/>', () => {
	beforeEach(() => {
		mockRouter.setCurrentUrl('/')
		mockRouter.asPath
	})
	it('should render the section correctly', () => {
		const { container } = render(<HomeSection />)
		const animatedText = screen.getByTestId('animated-text')
		expect(container.firstChild).toContainElement(animatedText)
		expect(
			screen.getByRole('button', {
				name: /conheça meus projetos/i
			})
		).toBeInTheDocument()
		const socialContacts = screen.getByRole('navigation')
		expect(container).toContainElement(socialContacts)
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})

	it('should match to snapshot', () => {
		const { container } = render(<HomeSection />)
		expect(container).toMatchSnapshot()
	})
})
