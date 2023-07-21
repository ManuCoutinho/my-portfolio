import { SocialContacts } from 'features/SocialContacts'
import HomeAnimation from 'components/Animation'
import { AnimatedText } from 'components/AnimatedText'
import { StackBox } from 'components/StackBox'
import animationData from 'data/home.json'

import * as Styled from './styles'

const HomeSection: React.FC = () => {
  return (
    <Styled.Container id='home'>
      <Styled.Wrapper>
        <Styled.BoxCenter>
          <AnimatedText />
          <StackBox justify='center'>
            <a href='#portfolio' rel='nofollow' aria-label='Ir para portfólio'>
              <Styled.Button type='button'>
                Conheça meus projetos!
              </Styled.Button>
            </a>
          </StackBox>
        </Styled.BoxCenter>
        <Styled.BoxLottie>
          <HomeAnimation data={animationData} />
        </Styled.BoxLottie>
      </Styled.Wrapper>
      <SocialContacts showToggle direction='column' />
    </Styled.Container>
  )
}

export default HomeSection
