import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Text } from '.'

describe('<Text/>', () => {
	it('should render the component correctly', () => {
		const { container } = render(<Text align='center'>Text</Text>)
		expect(screen.getByText('Text')).toBeInTheDocument()

		expect(container).toMatchSnapshot()
	})
})
