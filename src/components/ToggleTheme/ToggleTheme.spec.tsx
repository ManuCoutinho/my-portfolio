import React from 'react'
import { act } from 'react-dom/test-utils'
import { screen, fireEvent, renderHook } from '@testing-library/react'
import { render } from '__mocks__/customRender'
import { ToggleTheme } from '.'
import icons from 'constants/icons'
import { useTheme } from 'styled-components'
import { customWrapper } from '__mocks__/wrapper'

jest.spyOn(React, 'useContext')
describe('<ToggleTheme/>', () => {
	it('should render a  Toggle Theme component correctly', () => {
		render(<ToggleTheme />)
		expect(screen.getByRole('switch')).toBeInTheDocument()
	})
	it('should render a  switch icon correctly', () => {
		const { result } = renderHook(() => useTheme(), {
			wrapper: customWrapper()
		})

		render(<ToggleTheme />)
		const button = screen.getByRole('switch')
		expect(result.current.title).toBe('light')
		expect(screen.getByRole('switch').firstChild).toHaveAttribute(
			'icon',
			icons.sun
		)
		act(() => {
			fireEvent.click(button)
		})
		expect(screen.getByRole('switch').firstChild).toHaveAttribute(
			'icon',
			icons.moon
		)
	})

	it('should the Toggle Theme match to snapshot', () => {
		const { container } = render(<ToggleTheme />)
		expect(container.firstChild).toMatchSnapshot()
	})
})
