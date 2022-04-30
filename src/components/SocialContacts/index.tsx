import { FaLinkedin, FaGithub, FaTwitterSquare } from 'react-icons/fa'
import { SocialItems } from './SocialItems'
import { Container } from './styles'
import { StylesProps } from './types'

export const SocialContacts: React.FC<StylesProps> = ({ display }) => {
  return (
    <Container display={display} role='navigation' aria-label='social links'>
      <SocialItems url='https://linkedin.com/in/emanuela-coutinho'>
        <FaLinkedin aria-label='Acessar Linkedin' />
      </SocialItems>
      <SocialItems url='https://github.com/manucoutinho'>
        <FaGithub aria-label='Acessar GitHub' />
      </SocialItems>
      <SocialItems url='https://twitter.com/manucout'>
        <FaTwitterSquare aria-label='Acessar Twitter' />
      </SocialItems>
    </Container>
  )
}
