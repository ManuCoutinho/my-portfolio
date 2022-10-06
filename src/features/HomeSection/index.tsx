import { MyWorks } from '../../components/Layout/Buttons'
import { SocialContacts } from 'features/SocialContacts'
import { LottieAnimation } from '../../components/Animation'
import * as animationData from 'data/animation.json'

import * as Styled from './styles'
import { AnimatedText } from 'components/AnimatedText'
import { StackBox } from 'components/StackBox'

export const HomeSection: React.FC = () => {
  return (
    <Styled.Container id='home'>
      <Styled.Wrapper>
        <Styled.BoxCenter>
          <AnimatedText />
          <StackBox>
            <a
              href='#portfolio'
              role='navigation'
              rel='nofollow'
              aria-label='Ir para portfólio'
            >
              <MyWorks type='button'>Conheça meus projetos!</MyWorks>
            </a>
          </StackBox>
        </Styled.BoxCenter>
        <Styled.BoxLottie>
          <LottieAnimation data={animationData} />
        </Styled.BoxLottie>
      </Styled.Wrapper>
      <SocialContacts showToggle />
    </Styled.Container>
  )
}
