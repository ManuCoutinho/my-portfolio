import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import Contact from '.'

describe('<Contact/>', () => {
	it('should render the elements correctly ', () => {
		render(<Contact />)
		expect(
			screen.getByRole('heading', { name: /contato/i })
		).toBeInTheDocument()
		expect(
			screen.getByRole('heading', { name: /fale comigo!/i })
		).toBeInTheDocument()
		expect(screen.getByRole('navigation')).toBeInTheDocument()
		expect(
			screen.getByText(/Caso queira saber mais sobre o meu trabalho/i)
		).toBeInTheDocument()
		expect(screen.getByTestId('box-animation')).toBeInTheDocument()
	})

	it('should match to snapshot', () => {
		const { container } = render(<Contact />)

		expect(container).toMatchSnapshot()
	})
})
