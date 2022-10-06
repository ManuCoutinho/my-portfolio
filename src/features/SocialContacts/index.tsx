import { SocialLink } from 'components/SocialLink'
import { ToggleTheme } from 'components/ToggleTheme'
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'
import { Container } from './styles'
import { SocialContactProps } from './types'

export const SocialContacts: React.FC<SocialContactProps> = ({
  direction,
  showToggle = false
}) => {
  return (
    <Container
      direction={direction}
      role='navigation'
      aria-label='social links'
    >
      <SocialLink url='https://linkedin.com/in/emanuela-coutinho'>
        <LinkedinLogo size={32} weight='light' aria-label='Acessar Linkedin' />
      </SocialLink>
      <SocialLink url='https://github.com/manucoutinho'>
        <GithubLogo size={32} weight='light' aria-label='Acessar GitHub' />
      </SocialLink>
      <SocialLink url='https://twitter.com/manucout'>
        <TwitterLogo size={32} weight='light' aria-label='Acessar Twitter' />
      </SocialLink>
      {showToggle && <ToggleTheme />}
    </Container>
  )
}
