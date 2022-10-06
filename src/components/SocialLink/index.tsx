import { StackBoxCenter } from '../Layout/Base'
import { SocialLinkProps } from './types'
import * as Styled from './styles'

export const SocialLink: React.FC<SocialLinkProps> = ({ children, url }) => {
  return (
    <StackBoxCenter>
      <Styled.Item href={url} rel='noopener noreferrer' target='_blank'>
        {children}
      </Styled.Item>
    </StackBoxCenter>
  )
}
