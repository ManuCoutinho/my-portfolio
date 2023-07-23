import React from 'react'
import { renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { useRouter } from 'next/router'
import { render } from '__mocks__/customRender'
import { Menu } from '.'

jest.mock('next/router', () => require('next-router-mock'))
jest.spyOn(React, 'useState')
describe('<Menu/>', () => {
	beforeEach(() => {
		mockRouter.setCurrentUrl('/#home')
		mockRouter.asPath
	})
	it('should render the mock route', () => {
		const { result } = renderHook(() => {
			return useRouter()
		})
		expect(result.current).toMatchObject({ pathname: '/' })
		expect(result.current).toMatchObject({ asPath: '/#home' })
	})
	it('should render a Menu correctly', () => {
		render(<Menu />)
		expect(screen.getByRole('menu')).toBeInTheDocument()
	})
	it('should render list item correctly', () => {
		render(<Menu />)
		const menu = screen.getByRole('menu')
		expect(menu.firstChild).toHaveAttribute('role', 'menuitem')
		expect(menu).toHaveAttribute('data-state', 'close')
	})
	it('should render a menu item correctly', () => {
		const { result } = renderHook(() => useRouter())

		render(<Menu />)
		const item = screen.getByRole('menuitem', { name: /home/i })
		const menuLink = screen.getByRole('link', { name: /home/i })
		expect(item).toBeInTheDocument()
		expect(menuLink).toBeInTheDocument()
		expect(menuLink).toHaveAttribute('href', result.current.asPath)
	})
})
