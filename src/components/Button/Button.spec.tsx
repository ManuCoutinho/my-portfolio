import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Button } from '.'

describe('<Button/>', () => {
	it('should render a standard button correctly', () => {
		render(<Button>Text</Button>)
		const button = screen.getByRole('button')
		expect(button).toHaveTextContent(/Text/i)
	})
	it('should button component match to snapshot', () => {
		const { container } = render(<Button>Text</Button>)
		expect(container).toMatchSnapshot()
	})
})
