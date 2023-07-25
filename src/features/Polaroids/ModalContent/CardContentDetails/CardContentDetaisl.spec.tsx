import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { setupIntersectionObserverMock } from '__mocks__/intersectionObserver'
import CardContentDetails from '.'
import data from '__mocks__/data'

describe('<CardContentDetails />', () => {
	beforeEach(() => setupIntersectionObserverMock())

	it('should render the content modal correctly', async () => {
		render(<CardContentDetails {...data} />)
		expect(screen.getByText(/a belezura de test/i)).toBeInTheDocument()
		expect(
			screen.getByRole('term', { name: /description/i })
		).toBeInTheDocument()
		const projectLink = screen.getByRole('link', { name: /acessar o project/i })
		expect(projectLink).toHaveAttribute('href', 'http://www.somesite.com')
		expect(projectLink.firstChild).toHaveAttribute(
			'icon',
			'codicon:link-external'
		)
		expect(screen.getByTestId('stackbox')).toBeInTheDocument()
	})

	it('should match to snapshot', async () => {
		const { container } = render(<CardContentDetails {...data} />)
		expect(container).toMatchSnapshot()
	})
})
