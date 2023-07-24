import { fireEvent, renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { render } from '__mocks__/customRender'
import { Navbar } from '.'
import { useRouter } from 'next/router'
import { act } from 'react-dom/test-utils'

jest.mock('next/router', () => require('next-router-mock'))

describe('<Navbar/>', () => {
	beforeEach(() => {
		mockRouter.setCurrentUrl('/')
		mockRouter.asPath
	})
	it('should render the mock route', () => {
		const { result } = renderHook(() => {
			return useRouter()
		})
		expect(result.current).toMatchObject({ pathname: '/' })
	})
	it('should render a Navbar component correctly', () => {
		render(<Navbar />)
		expect(screen.getByRole('navigation')).toBeInTheDocument()
	})
	it('should render a Navbar component with a aria label attribute', () => {
		render(<Navbar />)
		expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Menu')
	})
	it('should render the menu opened when in mobile view', () => {
		Object.defineProperty(window, 'innerWidth', {
			writable: true,
			value: 500
		})
		render(<Navbar />)
		const menu = screen.getByRole('menu')
		const about = screen.getByRole('menuitem', { name: /sobre/i })
		expect(menu).toHaveAttribute('data-state', 'close')
		act(() => {
			fireEvent.click(screen.getByRole('button', { hidden: true }))
		})
		expect(menu).toHaveAttribute('data-state', 'opened')
		act(() => {
			fireEvent.click(about)
		})
		expect(menu).toHaveAttribute('data-state', 'close')
	})
})
