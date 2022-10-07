import { LottieAnimation } from 'components/Animation'
import { SocialContacts } from 'features/SocialContacts'
import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'
import { Text } from 'components/Text'
import links from 'constants/links'
import animationData from 'data/footer.json'
import * as Styled from './styles'

const Contact: React.FC = () => {
  return (
    <Styled.ContactSection id='contact'>
      <Heading as='h2' size='big'>
        Contato
      </Heading>
      <Styled.Container>
        <Styled.BoxAnimation>
          <LottieAnimation data={animationData} />
        </Styled.BoxAnimation>
        <StackBox direction='column' align='center' gap={1.5}>
          <Heading as='h3' size='small'>
            Fale Comigo!
          </Heading>
          <Text align='center'>
            Caso tenha ficado alguma dúvida ou, se quiser saber mais sobre o meu
            trabalho, fique à vontade para entrar em contato. #openToWork
          </Text>
          <Styled.Email rel='noreferrer' href={links.email} target='_blank'>
            devmanucoutinho@gmail.com
          </Styled.Email>
          <SocialContacts direction='row' />
        </StackBox>
      </Styled.Container>
    </Styled.ContactSection>
  )
}
export default Contact
