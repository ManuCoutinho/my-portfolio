import { renderHook, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import { useRouter } from 'next/router'
import { render } from '../../styles/theme/renderTheme'
import Header from '../../features/Header'

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
  it('should render a Header correctly', () => {
    render(<Header />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
