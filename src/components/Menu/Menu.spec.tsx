import { renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { useRouter } from 'next/router'
import { render } from '../../styles/theme/renderTheme'
import { Menu } from '.'

jest.mock('next/router', () => require('next-router-mock'))

describe('<Menu/>', () => {
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
  it('should render a Menu correctly', () => {
    render(<Menu />)
    expect(screen.getByRole('menu')).toBeInTheDocument()
  })
  it('should render list item correctly', () => {
    render(<Menu />)
    expect(screen.getByRole('menu').firstChild).toHaveAttribute(
      'role',
      'listitem'
    )
  })
  it('should render a menu link correctly', () => {
    render(<Menu />)
    expect(screen.getByText('Home')).toHaveAttribute('href', '/#home')
  })
})
