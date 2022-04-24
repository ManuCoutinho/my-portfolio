import { useContext } from 'react'
import { ModalContext } from '../Contexts/ModalContext/DataContext'

import { Card } from './Card'
import { Grid } from './styles'

export const GridPortfolio: React.FC = () => {
  const { data } = useContext(ModalContext)

  return (
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
  )
}
