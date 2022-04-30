import { StackBoxCenter } from '../Layout/Base'
import { ContactItem } from './styles'
import { SocialItemsProps } from './types'

export const SocialItems = ({ children, url }: SocialItemsProps) => {
  return (
    <StackBoxCenter>
      <ContactItem href={url} rel='noopener noreferrer' target='_blank'>
        {children}
      </ContactItem>
    </StackBoxCenter>
  )
}
