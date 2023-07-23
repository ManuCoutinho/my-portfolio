import React from 'react'
import { render, screen } from '__mocks__/customRender'
import { MenuButton } from '.'
import icons from 'constants/icons'

const mockFn = jest.fn()
const state = false
jest.spyOn(React, 'useState')
describe('<MenuButton/>', () => {
	it('should render a closed Menu button', async () => {
		render(<MenuButton open={state} handleOpen={() => mockFn(!state)} />)
		const menuButton = screen.getByRole('button', {
			hidden: true,
			expanded: false
		})
		expect(menuButton).toHaveAttribute('aria-label', 'Abrir Menu')
		expect(menuButton?.firstChild).toHaveProperty('icon', icons.hamburger)
	})
	it('should render a opened Menu button', () => {
		render(<MenuButton open={true} handleOpen={() => mockFn(false)} />)
		const menuButton = screen.getByRole('button', {
			hidden: true,
			expanded: false
		})
		expect(menuButton).toHaveAttribute('aria-label', 'Fechar Menu')
		expect(menuButton?.firstChild).toHaveProperty('icon', icons.x)
		expect(menuButton).toHaveAttribute('aria-expanded', 'false')
	})
})
