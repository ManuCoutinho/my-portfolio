import { Icon } from '@iconify-icon/react'
import icons from 'constants/icons'
import { ModalProps } from './types'

import * as Styled from './styles'

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
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
export default Modal
