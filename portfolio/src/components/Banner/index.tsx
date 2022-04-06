import Link from 'next/link'
import { Box } from '../Foundation/Base'
import { MyWorks } from '../Foundation/Buttons'
import { AnimationBanner } from './AnimationBanner'

import { Container, ContainerWrapper, DivWrapper } from './styles'
import { TextAnimated } from './TextAnimated'

export function Banner(): JSX.Element {
  return (
    <Container>
      <ContainerWrapper>
        <DivWrapper>
          <TextAnimated />
        </DivWrapper>
        <AnimationBanner />
      </ContainerWrapper>
      <Box>
        <MyWorks>
          <Link href='#portfolio'>Meus trabalhos!</Link>
        </MyWorks>
      </Box>
    </Container>
  )
}
