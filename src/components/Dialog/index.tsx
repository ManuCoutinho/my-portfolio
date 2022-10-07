import { DialogProps } from './types'
import * as Styled from './styles'
import { XCircle } from 'phosphor-react'

const Dialog: React.FC<DialogProps> = ({ children, onClose }) => {
  return (
    <Styled.Portal>
      <Styled.Overlay />
      <Styled.Content>
        {children}
        <Styled.Close asChild onClick={onClose}>
          <XCircle />
        </Styled.Close>
      </Styled.Content>
    </Styled.Portal>
  )
}
export default Dialog
