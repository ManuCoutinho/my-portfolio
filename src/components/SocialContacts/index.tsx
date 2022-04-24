import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa'
import { SocialItems } from './SocialItems'
import { Container } from './styles'
import { StylesProps } from './types'

export const SocialContacts: React.FC<StylesProps> = ({ display }) => {
  return (
    <Container display={display}>
      <SocialItems
        url='https://linkedin.com/in/emanuela-coutinho'
        key='linkedin'
      >
        <FaLinkedin />
      </SocialItems>
      <SocialItems url='https://github.com/manucoutinho' key='git'>
        <FaGithub />
      </SocialItems>
      <SocialItems url='https://twitter.com/manucout' key='twitter'>
        <FaTwitterSquare />
      </SocialItems>
    </Container>
  )
}
