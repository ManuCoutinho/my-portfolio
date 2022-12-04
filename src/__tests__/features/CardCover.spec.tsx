import { screen } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { render } from '../../styles/theme/renderTheme'
import { mockImg } from '../../__mocks__/images'
import CardContentCover from '../../features/CardContentCover'

describe('<CardContentCover />', () => {
  it('should render CardContentCover section components correctly', () => {
    act(async () => {
      render(<CardContentCover img={mockImg} />)
      const box = await screen.findByTestId('stackbox')
      expect(box).toBeInTheDocument()
    })
  })
  it('should match to snapshot', () => {
    const { container } = render(<CardContentCover />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
