import { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import ReactModal from 'react-modal'
import { ThemeContext } from 'styled-components'

import { StackBox, Subtitle } from '../Layout/Base'
import { ModalButton } from '../Layout/Buttons'
import { CardComponent } from './styles'
import { Props } from './Modal/types'

const Modal = dynamic(() => import('./Modal'), { ssr: false })

export const Card: React.FC<Props> = ({ ...props }) => {
  ReactModal.setAppElement('#__next')
  const router = useRouter()
  const { colors } = useContext(ThemeContext)
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
    router.push('/#portfolio')
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 830) {
      setIsTouchDevice(true)
    }
  }, [router])

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
        <Subtitle>{props.title}</Subtitle>
        {!isTouchDevice ? (
          <ModalButton type='button' onClick={() => setModalIsOpen(true)}>
            Detalhes
          </ModalButton>
        ) : (
          <ModalButton
            type='button'
            onClick={() => router.push('/page-temporary')}
          >
            Detalhes
          </ModalButton>
        )}
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
              backgroundColor: 'rgba(0, 0, 0, 0.10)'
            },
            content: {
              position: 'absolute',
              padding: 0,
              top: '7.1875rem',
              width: '70vw',
              border: `1px solid ${colors.background}`,
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 0,
              margin: '0 auto',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
              backgroundColor: `${colors.bg_modal}`,
              overflowY: 'auto'
            }
          }}
        >
          <Modal
            close={closeModal}
            title={props.title}
            description={props.description}
            framework={props.framework}
            site={props.site}
            repo={props.repo}
            styles={props.styles}
            api={props.api}
            tools={props.tools}
            img={props.img}
          />
        </ReactModal>
      </CardComponent>
    </StackBox>
  )
}
