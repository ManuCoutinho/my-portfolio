import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import ModalContent from './ModalContent'
import { PropsModal } from './types'
import ModalHeader from './ModalHeader'

import { ModalFooter } from './styles'
import { ModalButton } from 'components/Layout/Buttons'

const ModalDetails = dynamic(() => import('./ModalContentDetails'))

const Modal: React.FC<PropsModal> = ({ ...props }) => {
  const { asPath } = useRouter()
  return (
    <>
      <ModalHeader name={props.title} />

      {asPath === '/#overview' ? (
        <ModalContent img={props.img} />
      ) : asPath === '/#details' ? (
        <ModalDetails
          title={props.title}
          description={props.description}
          framework={props.framework}
          site={props.site}
          repo={props.repo}
          styles={props.styles}
          api={props.api}
          tools={props.tools}
        />
      ) : (
        <ModalContent img={props.img} />
      )}
      <ModalFooter>
        <ModalButton type='button' onClick={props.close}>
          Fechar
        </ModalButton>
      </ModalFooter>
    </>
  )
}
export default Modal
