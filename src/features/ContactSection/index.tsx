import { LottieAnimation } from 'components/Animation'
import * as animationData from './animation.json'
import { SocialContacts } from 'features/SocialContacts'
import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'
import { Text } from 'components/Text'
import { BoxAnimation, Container, ContactSection, Email } from './styles'

const Contact: React.FC = () => {
  return (
    <ContactSection id='contact'>
      <Heading as='h2' size='big'>
        Contato
      </Heading>
      <Container>
        <BoxAnimation>
          <LottieAnimation data={animationData} />
        </BoxAnimation>
        <StackBox direction='column' align='center' gap={1.5}>
          <Heading as='h3' size='small'>
            Fale Comigo!
          </Heading>
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
          <SocialContacts direction='row' />
        </StackBox>
      </Container>
    </ContactSection>
  )
}
export default Contact
