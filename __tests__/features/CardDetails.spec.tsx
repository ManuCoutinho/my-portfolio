import { screen } from '@testing-library/react'
import { render } from '../../src/styles/theme/renderTheme'
import CardContentDetails from '../../src/features/CardContentDetails'
import * as data from '../../src/__mocks__/data'

const mockData = data.default
describe('<CardContent/>', () => {
  it('should render the links correctly', () => {
    render(<CardContentDetails {...mockData} />)
    const ghLink = screen.getByRole('link', {
      name: /repositorio no github/i
    })
    const projectLink = screen.getByRole('link', {
      name: /acessar o project/i
    })
    expect(ghLink).toBeInTheDocument()
    expect(ghLink).toHaveAttribute('href', mockData.repo)
    expect(projectLink).toHaveAttribute('href', mockData.site)
    expect(projectLink).toHaveAttribute('target', '_blank')
  })
  it('should render the subtitles correctly', () => {
    render(<CardContentDetails {...mockData} />)
    expect(screen.getByText(/descrição/i)).toBeInTheDocument()
    expect(screen.getByText(/framework/i)).toBeInTheDocument()
    expect(screen.getByText(/linguagens e ferramentas/i)).toBeInTheDocument()
    expect(screen.getByText(/estilização/i)).toBeInTheDocument()
    expect(screen.getByText(/api/i)).toBeInTheDocument()
    expect(screen.getByText(/disponível em/i)).toBeInTheDocument()
  })
  it('should render a Card Details correctly', () => {
    const { container } = render(<CardContentDetails {...mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
