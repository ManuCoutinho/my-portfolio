import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa'
import { SocialItems } from './SocialItems'
import { Container } from './styles'

export const SocialContacts: React.FC = () => {
  return (
    <Container>
      <SocialItems url='https://linkedin.com/in/emanuela-coutinho'>
        <FaLinkedin />
      </SocialItems>
      <SocialItems url='https://github.com/manucoutinho'>
        <FaGithub />
      </SocialItems>
      <SocialItems url='https://twitter.com/manucout'>
        <FaTwitterSquare />
      </SocialItems>
    </Container>
  )
}
