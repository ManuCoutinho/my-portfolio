import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import Animation from '.'
import data from 'data/home.json'
describe('<Animation />', () => {
	it('should render the lottie animation correctly', async () => {
		render(<Animation data={data} />)
		expect(screen.getByTestId('box-animation')).toBeInTheDocument()
		expect(screen.getByTestId('box-animation').firstChild).toHaveAttribute(
			'preserveAspectRatio',
			'xMidYMid meet'
		)
	})
})
