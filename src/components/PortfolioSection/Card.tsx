import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import ReactModal from 'react-modal'
import { useTheme } from 'styled-components'

import { StackBox, Subtitle } from '../Layout/Base'
import { ModalButton } from '../Layout/Buttons'
import { CardComponent, Image } from './styles'
import { Props } from './Modal/types'

const Modal = dynamic(() => import('./Modal'), { ssr: false })

export const Card: React.FC<Props> = ({ ...props }) => {
  ReactModal.setAppElement('#__next')
  const router = useRouter()
  const { colors, title } = useTheme()

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
        <Image>
          <picture>
            <img
              loading='lazy'
              width={300}
              height={350}
              alt={props.alt}
              src={title === 'light' ? props.coverAltLight : props.coverAltDark}
            />
            <source
              srcSet={
                title === 'light'
                  ? props.coverDefaultLight
                  : props.coverDefaultDark
              }
              type='image/webp'
            />
          </picture>
        </Image>

        <Subtitle>{props.title}</Subtitle>
        {!isTouchDevice ? (
          <ModalButton type='button' onClick={() => setModalIsOpen(true)}>
            Detalhes
          </ModalButton>
        ) : (
          <ModalButton
            type='button'
            onClick={() => router.push(`${props.route}`)}
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
              height: '85%',
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
