import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { mockImg } from '../../__mocks__/images'
import CardContentCover from '../../features/CardContentCover'

describe('<CardContenCover />', () => {
  it('should render CardContentCover section components correctly', () => {
    render(<CardContentCover img={mockImg} />)
    expect(screen.getByTestId('stackbox')).toBeInTheDocument()
  })
  it('should match to snapshot', () => {
    const { container } = render(<CardContentCover />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
