import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Error } from '.'

describe('<Error />', () => {
	it('should render the Erro template correctly', () => {
		const { container } = render(<Error />)
		expect(
			screen.getByRole('heading', { name: /Opss! Como você chegou aqui?/ })
		).toBeInTheDocument()
		expect(
			screen.getByText('Parece que você chegou o limite deste universo.')
		).toBeInTheDocument()
		expect(screen.getByAltText('error image')).toBeInTheDocument()
		expect(screen.getByRole('button', { name: /voltar/i })).toBeInTheDocument()
		expect(container).toMatchSnapshot()
	})
})
