import { Box, LinkInternal } from '../Foundation/Base'
import { MyWorks } from '../Foundation/Buttons'
import { AnimationBanner } from './AnimationBanner'

import { Container, ContainerWrapper, DivWrapper } from './styles'
import { TextAnimated } from './TextAnimated'

export function Banner(): JSX.Element {
  return (
    <Container id='home'>
      <ContainerWrapper>
        <DivWrapper>
          <TextAnimated />
        </DivWrapper>
        <AnimationBanner />
      </ContainerWrapper>
      <Box>
        <LinkInternal href='#portfolio' role='navigation' rel='nofollow'>
          <MyWorks type='button'>Conheça meus projetos!</MyWorks>
        </LinkInternal>
      </Box>
    </Container>
  )
}
