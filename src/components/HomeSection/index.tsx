import { Box, LinkInternal } from '../Layout/Base'
import { MyWorks } from '../Layout/Buttons'
import { SocialContacts } from '../SocialContacts'
import { LottieAnimation } from '../Animation'
import * as animationData from '../HomeSection/animation.json'

import {
  ContainerHome,
  ContainerWrapper,
  DivWrapper,
  BoxLottie
} from './styles'
import { TextAnimated } from './TextAnimated'

export function Banner(): JSX.Element {
  return (
    <ContainerHome id='home'>
      <ContainerWrapper>
        <DivWrapper>
          <TextAnimated />
          <Box>
            <LinkInternal
              href='#portfolio'
              role='navigation'
              rel='nofollow'
              aria-label='Ir para portfólio'
            >
              <MyWorks type='button'>Conheça meus projetos!</MyWorks>
            </LinkInternal>
          </Box>
        </DivWrapper>
        <BoxLottie>
          <LottieAnimation data={animationData} />
        </BoxLottie>
      </ContainerWrapper>
      <SocialContacts display='block' />
    </ContainerHome>
  )
}
