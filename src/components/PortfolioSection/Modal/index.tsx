import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { ModalContent } from './ModalContent'
import { ModalHeader } from './ModalHeader'
import { ModalFooter } from './styles'

import { ModalButton } from '../../Layout/Buttons'

type PropsModal = {
  close(): void
}

const ModalDetails = dynamic(() => import('./ModalContentDetails'))

const Modal: React.FC<PropsModal> = ({ close }) => {
  const { asPath } = useRouter()

  return (
    <>
      <ModalHeader />
      {asPath === '/#overview' ? (
        <ModalContent />
      ) : asPath === '/#details' ? (
        <ModalDetails />
      ) : (
        <ModalContent />
      )}
      <ModalFooter>
        <ModalButton type='button' onClick={close}>
          Fechar
        </ModalButton>
      </ModalFooter>
    </>
  )
}
export default Modal
