import { Icon } from '@iconify-icon/react'
import { DialogProps } from './types'
import * as Styled from './styles'
import icons from 'constants/icons'

const Dialog: React.FC<DialogProps> = ({ children, onClose }) => {
  return (
    <Styled.Portal>
      <Styled.Overlay />
      <Styled.Content>
        {children}
        <Styled.Close
          asChild
          onClick={onClose}
          role='button'
          aria-label='close-button'
          title='fechar'
        >
          <Icon icon={icons.close} />
        </Styled.Close>
      </Styled.Content>
    </Styled.Portal>
  )
}
export default Dialog
