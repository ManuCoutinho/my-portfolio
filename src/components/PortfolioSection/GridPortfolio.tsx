import { useContext, useState } from 'react'
import { ModalContext } from '../Contexts/ModalContext/DataContext'
import { LoadButton } from '../Layout/Buttons'

import { Card } from './Card'
import { BoxButtons, Grid } from './styles'

const LIMIT = 6
const TOTAL = 13

export const GridPortfolio: React.FC = () => {
  const { data: info } = useContext(ModalContext)
  const [limit, setLimit] = useState(LIMIT)

  function handleLimit() {
    limit <= TOTAL && setLimit(limit + 3)
  }

  let data = info.slice(0, limit)
  return (
    <>
      <Grid>
        {data.map((project) => (
          <Card
            key={project.id}
            title={project.name}
            description={project.description}
            framework={project.framework}
            site={project.site}
            repo={project.repo}
            styles={project.styles}
            api={project.api}
            tools={project.tools}
            img={project.img}
          />
        ))}
      </Grid>
      <BoxButtons>
        {data.length === LIMIT ? null : (
          <LoadButton onClick={() => setLimit(limit - 3)}>
            Mostrar menos
          </LoadButton>
        )}

        {data.length === TOTAL ? null : (
          <LoadButton onClick={handleLimit}>Mostrar mais</LoadButton>
        )}
      </BoxButtons>
    </>
  )
}
