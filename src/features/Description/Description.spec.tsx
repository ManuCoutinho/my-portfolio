import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Description } from '.'

describe('<Description/>', () => {
	it('should render correctly', () => {
		render(<Description animate={true} />)
		const content = screen.getByTestId('definition')
		const heading = screen.getByRole('heading')
		expect(content).toBeInTheDocument()
		expect(content).toContainElement(heading)
	})
	it('should match to snapshot', () => {
		const { container } = render(<Description animate={true} />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
