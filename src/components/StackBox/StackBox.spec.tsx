import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { StackBox } from '.'

describe('<StackBox/>', () => {
	it('should render a StackBox with as props correctly', () => {
		const att = 'section'
		const { container } = render(<StackBox as={att} />)
		expect(screen.getByTestId('stackbox')).toBeInTheDocument()
		expect(document.getElementsByTagName('section')[0]).toHaveAttribute(
			'data-testid',
			'stackbox'
		)
		expect(container).toMatchInlineSnapshot(`
		<div>
		  <section
		    class="sc-ce9dac95-0 hjZBZn"
		    data-testid="stackbox"
		  />
		</div>
	`)
	})
})
