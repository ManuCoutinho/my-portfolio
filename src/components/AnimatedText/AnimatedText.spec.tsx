import React from 'react'
import { screen } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { AnimatedText } from '.'

jest.spyOn(React, 'useEffect')
jest.spyOn(React, 'useRef')
describe('<AnimatedText />', () => {
	it('should render the animated text component correctly', async () => {
		render(<AnimatedText />)
		expect(screen.getByText(/hi, i am/i)).toBeInTheDocument()
		expect(screen.getByTestId('animated-text')).toBeInTheDocument()
		expect(await screen.findByText(/front/i)).toBeInTheDocument()
	})
})
