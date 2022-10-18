import { useState, FC } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { useData } from 'hooks/useData'
import { Card } from '../Card'
import { Heading } from 'components/Heading'
import * as Styled from './styles'

const LIMIT = 6
const TOTAL = 13

const Portfolio: FC = () => {
  const { data: info } = useData()
  const [limit, setLimit] = useState(LIMIT)

  function handleLimit() {
    limit <= TOTAL && setLimit(limit + 3)
  }

  const data = info.slice(0, limit)
  return (
    <Styled.PortfolioSection id='portfolio'>
      <Heading as='h2' size='big'>
        Portfólio
      </Heading>
      <Styled.Grid>
        {data.map((project) => (
          <Card key={uuidv4()} {...project} />
        ))}
      </Styled.Grid>
      <Styled.BoxButtons>
        {data?.length === LIMIT ? null : (
          <Styled.LoadButton onClick={() => setLimit(limit - 3)}>
            Mostrar menos
          </Styled.LoadButton>
        )}
        {data?.length === TOTAL ? null : (
          <Styled.LoadButton onClick={handleLimit}>
            Mostrar mais
          </Styled.LoadButton>
        )}
      </Styled.BoxButtons>
    </Styled.PortfolioSection>
  )
}

export default Portfolio
