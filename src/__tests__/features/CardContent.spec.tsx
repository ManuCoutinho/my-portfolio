import { screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { render } from '../../styles/theme/renderTheme'
import mockData from '../../__mocks__/data'
import { CardContent } from '../../features/CardContent'

describe('<CardContent />', () => {
  it('should render CardContent section components correctly', () => {
    act(async () => {
      render(<CardContent {...mockData} />)
      expect(
        await screen.findByRole('heading', { name: mockData.name })
      ).toBeInTheDocument()
    })
  })
  it('should render tabs components', () => {
    act(async () => {
      render(<CardContent {...mockData} />)
      expect(
        await screen.findByRole('tab', { name: /visão geral/i })
      ).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: /detalhes/i })).toBeInTheDocument()
      expect(screen.getByRole('img', { name: /img1/i })).toBeInTheDocument()
      expect(screen.getByRole('tabpanel')).toBeInTheDocument()
    })
  })
  it('should match to snapshot', () => {
    const { container } = render(<CardContent {...mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
