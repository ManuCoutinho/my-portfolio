import { useContext, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import ReactModal from 'react-modal'
import { ThemeContext } from 'styled-components'

import { StackBox, Subtitle } from '../Layout/Base'
import { ModalButton } from '../Layout/Buttons'
import { CardComponent, Description } from './styles'

const Modal = dynamic(() => import('./Modal'))

export const Card = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const { colors } = useContext(ThemeContext)

  ReactModal.setAppElement('#__next')
  return (
    <StackBox>
      <CardComponent>
        <Image
          loading='lazy'
          width={300}
          height={300}
          alt='imag temporaria'
          src='/assets/sample.webp'
        />
        <Subtitle>Nome do Projeto</Subtitle>
        <ModalButton type='button' onClick={() => setModalIsOpen(true)}>
          Detalhes
        </ModalButton>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel='Detalhes do projeto'
          ariaHideApp={true}
          shouldFocusAfterRender={true}
          shouldCloseOnEsc={true}
          preventScroll={true}
          style={{
            overlay: {
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(255, 255, 255, 0.1)'
            },
            content: {
              position: 'absolute',
              padding: 0,
              top: '15%',
              border: `1px solid ${colors.background}`,
              background: `${colors.glass}`,
              overflow: 'hidden',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 0,
              width: '80vw',
              height: '70vh',
              margin: '0 auto',
              backdropFilter: 'blur(30px) saturate(180%)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
            }
          }}
        >
          <Modal close={() => setModalIsOpen(false)} />
        </ReactModal>
      </CardComponent>
    </StackBox>
  )
}
