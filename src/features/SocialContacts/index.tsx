import { Icon } from '@iconify-icon/react'
import { SocialLink } from 'components/SocialLink'
import { ToggleTheme } from 'components/ToggleTheme'
import links from 'constants/links'
import { SocialContactProps } from './types'
import { Container } from './styles'
import icons from 'constants/icons'

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
        <Icon icon={icons.linkedin} title='Acessar Linkedin' />
      </SocialLink>
      <SocialLink url={links.git}>
        <Icon icon={icons.github} title='Acessar GitHub' />
      </SocialLink>
      <SocialLink url={links.twitter}>
        <Icon icon={icons.twitter} title='Acessar Twitter' />
      </SocialLink>
      {showToggle && <ToggleTheme />}
    </Container>
  )
}
