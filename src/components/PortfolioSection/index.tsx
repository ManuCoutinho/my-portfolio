import { Title } from '../Layout/Base'
import { GridPortfolio } from './GridPortfolio'

import { PortfolioSection } from './styles'
//todo add animação de entrada + modal + introdução da seção

export const Portfolio: React.FC = () => {
  return (
    <PortfolioSection id='portfolio'>
      <Title>Portfólio</Title>
      <GridPortfolio />
    </PortfolioSection>
  )
}
