import { Heading } from 'components/Heading'
import { GridPortfolio } from './GridPortfolio'

import { PortfolioSection } from './styles'

const Portfolio: React.FC = () => {
  return (
    <PortfolioSection id='portfolio'>
      <Heading as='h2' size='big'>
        Portfólio
      </Heading>
      <GridPortfolio />
    </PortfolioSection>
  )
}

export default Portfolio
