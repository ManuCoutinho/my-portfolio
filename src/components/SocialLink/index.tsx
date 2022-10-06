import { SocialLinkProps } from './types'
import * as Styled from './styles'
import { StackBox } from 'components/StackBox'

export const SocialLink: React.FC<SocialLinkProps> = ({ children, url }) => {
  return (
    <StackBox>
      <Styled.Item href={url} rel='noopener noreferrer' target='_blank'>
        {children}
      </Styled.Item>
    </StackBox>
  )
}
