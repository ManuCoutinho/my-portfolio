import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import Footer from '.'

describe('<Footer/>', () => {
	it('should render a footer component correctly', () => {
		render(<Footer />)
		expect(screen.getByTestId('footer')).toHaveTextContent(
			/Copyright ©2024 Todos os direitos reservados./i
		)
		expect(screen.getByText(/Manu/i)).toBeInTheDocument()
	})
	it('should match to snapshot', () => {
		const { container } = render(<Footer />)

		expect(container).toMatchSnapshot()
	})
})
