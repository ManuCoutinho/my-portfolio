import { screen } from '@testing-library/react'
import { render } from '../../styles/theme/renderTheme'
import { act } from 'react-dom/test-utils'
import CardContentDetails from '../../features/CardContentDetails'
import * as data from '../../__mocks__/data'

const mockData = data.default
describe('<CardContentDetails/>', () => {
  it('should render the links correctly', () => {
    act(async () => {
      render(<CardContentDetails {...mockData} />)
      const ghLink = await screen.findByRole('link', {
        name: /repositorio no github/i
      })
      const projectLink = await screen.findByRole('link', {
        name: /acessar o project/i
      })
      expect(ghLink).toBeInTheDocument()
      expect(ghLink).toHaveAttribute('href', mockData.repo)
      expect(projectLink).toHaveAttribute('href', mockData.site)
      expect(projectLink).toHaveAttribute('target', '_blank')
    })
  })
  it('should render the subtitles correctly', () => {
    act(async () => {
      render(<CardContentDetails {...mockData} />)
      expect(await screen.findByText(/descrição/i)).toBeInTheDocument()
      expect(await screen.findByText(/framework/i)).toBeInTheDocument()
      expect(
        await screen.findByText(/linguagens e ferramentas/i)
      ).toBeInTheDocument()
      expect(await screen.findByText(/estilização/i)).toBeInTheDocument()
      expect(await screen.findByText(/api/i)).toBeInTheDocument()
      expect(await screen.findByText(/disponível em/i)).toBeInTheDocument()
    })
  })
  it('should render a Card Details correctly', () => {
    const { container } = render(<CardContentDetails {...mockData} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
