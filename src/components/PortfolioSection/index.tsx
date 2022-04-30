import { Title } from '../Layout/Base'
import { GridPortfolio } from './GridPortfolio'

import { PortfolioSection } from './styles'

const Portfolio: React.FC = () => {
  return (
    <PortfolioSection id='portfolio'>
      <Title>Portfólio</Title>
      <GridPortfolio />
    </PortfolioSection>
  )
}

export default Portfolio
