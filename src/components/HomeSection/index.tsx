import { Box, LinkInternal } from '../Foundation/Base'
import { MyWorks } from '../Foundation/Buttons'
import { SocialContacts } from '../SocialContacts'
import { AnimationBanner } from './AnimationBanner'

import { ContainerHome, ContainerWrapper, DivWrapper } from './styles'
import { TextAnimated } from './TextAnimated'

export function Banner(): JSX.Element {
  return (
    <ContainerHome id='home'>
      <ContainerWrapper>
        <DivWrapper>
          <TextAnimated />
          <Box>
            <LinkInternal href='#portfolio' role='navigation' rel='nofollow'>
              <MyWorks type='button'>Conheça meus projetos!</MyWorks>
            </LinkInternal>
          </Box>
        </DivWrapper>
        <AnimationBanner />
      </ContainerWrapper>
      <SocialContacts />
    </ContainerHome>
  )
}
