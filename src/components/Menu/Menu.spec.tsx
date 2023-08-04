import React from 'react'
import { renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { useRouter } from 'next/router'
import { render } from '__mocks__/customRender'
import { Menu } from '.'

jest.mock('next/router', () => require('next-router-mock'))
jest.spyOn(React, 'useState')

const handleStateMock = jest.fn()
const renderElement = () => render(<Menu handleState={handleStateMock} />)
describe('<Menu/>', () => {
	beforeEach(() => {
		mockRouter.setCurrentUrl('/home#home')
		mockRouter.asPath
	})
	it('should render the mock route', () => {
		const { result } = renderHook(() => {
			return useRouter()
		})
		expect(result.current).toMatchObject({ pathname: '/home' })
		expect(result.current).toMatchObject({ asPath: '/home#home' })
	})
	it('should render a Menu correctly', () => {
		renderElement()
		expect(screen.getByRole('menu')).toBeInTheDocument()
	})
	it('should render list item correctly', () => {
		renderElement()
		const menu = screen.getByRole('menu')
		expect(menu.firstChild).toHaveAttribute('role', 'menuitem')
	})
	it('should render a menu item correctly', () => {
		const { result } = renderHook(() => useRouter())

		renderElement()
		const item = screen.getByRole('menuitem', { name: /home/i })
		const menuLink = screen.getByRole('link', { name: /home/i })
		expect(item).toBeInTheDocument()
		expect(menuLink).toBeInTheDocument()
		expect(menuLink).toHaveAttribute('href', result.current.asPath)
	})
})
