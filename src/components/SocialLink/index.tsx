import { SocialLinkProps } from './types'
import * as Styled from './styles'

export const SocialLink: React.FC<SocialLinkProps> = ({ children, url }) => {
  return (
    <Styled.Item href={url} rel='noopener noreferrer' target='_blank'>
      {children}
    </Styled.Item>
  )
}
