import { SocialLink } from 'components/SocialLink'
import { ToggleTheme } from 'components/ToggleTheme'
import { GithubLogo, LinkedinLogo, TwitterLogo } from 'phosphor-react'
import links from 'constants/links'
import { SocialContactProps } from './types'
import { Container } from './styles'

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
      <SocialLink url={links.linkedin}>
        <LinkedinLogo size={32} weight='light' aria-label='Acessar Linkedin' />
      </SocialLink>
      <SocialLink url={links.git}>
        <GithubLogo size={32} weight='light' aria-label='Acessar GitHub' />
      </SocialLink>
      <SocialLink url={links.twitter}>
        <TwitterLogo size={32} weight='light' aria-label='Acessar Twitter' />
      </SocialLink>
      {showToggle && <ToggleTheme />}
    </Container>
  )
}
