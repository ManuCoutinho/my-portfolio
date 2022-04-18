import { LottieAnimation } from '../Animation'
import * as animationData from './animation.json'
import { SocialContacts } from '../SocialContacts'

import { StackBoxCenter, Subtitle, Title, Text } from '../Layout/Base'
import { BoxAnimation, Container, ContactSection, Email } from './styles'

export const Contact: React.FC = () => {
  return (
    <ContactSection id='contact'>
      <Title>Contato</Title>
      <Container>
        <BoxAnimation>
          <LottieAnimation data={animationData} />
        </BoxAnimation>
        <StackBoxCenter>
          <Subtitle>Fale Comigo!</Subtitle>
          <Text align='center'>
            Caso tenha ficado alguma dúvida ou, se quiser saber mais sobre o meu
            trabalho, fique à vontade para entrar em contato. #openToWork
          </Text>
          <Email
            rel='noreferrer'
            href='mailto:devmanucoutinho@gmail.com'
            target='_blank'
          >
            devmanucoutinho@gmail.com
          </Email>
          <SocialContacts display='flex' />
        </StackBoxCenter>
      </Container>
    </ContactSection>
  )
}
