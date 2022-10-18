import { render } from '../../styles/theme/renderTheme'
import { LottieAnimation } from '.'
import animation from 'data/home.json'

const options = {
  loop: true,
  autoplay: true,
  animationData: animation
}
const useLottieMock = jest.fn()
jest.mock('lottie-react', () => ({
  useLottie: () => useLottieMock
}))

describe('<Animation/>', () => {
  it('should render a mock Animation correctly', () => {
    useLottieMock(options)
    const { container } = render(<LottieAnimation data={animation} />)
    expect(container).toBeInTheDocument()
  })
})
