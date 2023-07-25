import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { Carousel } from '.'

jest.spyOn(React, 'useEffect')
jest.spyOn(React, 'useRef')
jest.spyOn(global, 'setTimeout')
jest.spyOn(global, 'clearTimeout')
jest.useFakeTimers()
describe('<Carousel />', () => {
	it('should render a title section', () => {
		render(<Carousel />)
		expect(
			screen.getByRole('heading', { name: /minhas skills/i })
		).toBeInTheDocument()
	})
	it('should render a slider with language icons', () => {
		render(<Carousel />)
		const slider = screen.getByTestId('slider')
		expect(slider).toBeInTheDocument()
		expect(slider).toHaveClass('keen-slider')
		expect(slider.firstChild).toHaveClass('keen-slider__slide')
	})
	it('should match to snapshot', () => {
		const { container } = render(<Carousel />)
		expect(container).toMatchSnapshot()
	})
})
