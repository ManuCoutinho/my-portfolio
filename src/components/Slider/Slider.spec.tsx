import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { mockImg } from '__mocks__/images'
import Slider from '.'

describe('<Slider/>', () => {
	it('should render a Slider correctly  ', () => {
		render(<Slider img={mockImg} />)
		const slider = screen.getByTestId('slider-img')
		expect(slider).toBeInTheDocument()
		expect(slider).toHaveClass('keen-slider')
	})
	it('should render a image correctly ', () => {
		render(<Slider img={mockImg} />)
		const slider = screen.getByTestId('slider-img')
		expect(slider.firstChild).toHaveClass('keen-slider__slide')
		expect(screen.getByRole('img', { name: /img1/i })).toBeInTheDocument()
	})
})
