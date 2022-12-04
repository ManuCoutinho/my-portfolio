import { renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { render } from '../../styles/theme/renderTheme'
import { Navbar } from '.'
import { useRouter } from 'next/router'

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
    render(<Navbar>Text</Navbar>)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
  it('should render a Navbar component with a aria label attribute', () => {
    render(<Navbar>Text</Navbar>)
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Menu')
  })
})
