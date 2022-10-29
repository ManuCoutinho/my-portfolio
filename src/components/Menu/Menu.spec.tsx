import { renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { useRouter } from 'next/router'
import { render } from '../../styles/theme/renderTheme'
import { Menu } from '.'
import { dark, combineTheme } from 'styles/theme'

const theme = combineTheme(dark)
jest.mock('next/router', () => require('next-router-mock'))

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
    expect(screen.getByRole('menu').firstChild).toHaveAttribute(
      'role',
      'menuitem'
    )
  })
  it('should render a menu item correctly', () => {
    const { result } = renderHook(() => {
      return useRouter()
    })

    render(<Menu />)
    const item = screen.getByRole('menuitem', { name: /home/i })
    const menuLink = screen.getByRole('link', { name: /home/i })
    expect(item).toBeInTheDocument()
    expect(menuLink).toBeInTheDocument()
    expect(menuLink).toHaveAttribute('href', result.current.asPath)
    expect(item).toHaveStyle(`text-shadow: 0 2px 3px ${theme.colors.highlight}`)
  })
})
