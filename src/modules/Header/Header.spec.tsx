import { renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { render } from '__mocks__/customRender'
import Header from '.'
import { useRouter } from 'next/router'

jest.mock('next/router', () => require('next-router-mock'))

describe('<Header/>', () => {
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
		render(<Header />)
		expect(screen.getByRole('navigation')).toBeInTheDocument()
	})
	it('should render a Navbar component with a aria label attribute', () => {
		render(<Header />)
		expect(screen.getByRole('navigation')).toHaveAttribute(
			'aria-label',
			'Main Menu'
		)
	})
})
