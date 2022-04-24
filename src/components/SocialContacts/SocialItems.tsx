import { StackBoxCenter } from '../Layout/Base'
import { ContactItem } from './styles'
import { SocialItemsProps } from './types'

export const SocialItems = ({ children, url }: SocialItemsProps) => {
  return (
    <StackBoxCenter role='navigation'>
      <ContactItem
        href={url}
        rel='noopener noreferrer'
        target='_blank'
        role='menuitem'
      >
        {children}
      </ContactItem>
    </StackBoxCenter>
  )
}
