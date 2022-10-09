import { useEffect, useState, FC } from 'react'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import * as Dialog from '@radix-ui/react-dialog'
import { useTheme } from 'styled-components'
import { StackBox } from 'components/StackBox'
import { Heading } from 'components/Heading'
import { DataProps } from './types'
import * as Styled from './styles'
import { CardContent } from 'features/CardContent'

const Modal = dynamic(() => import('components/Dialog'), { ssr: false })

export const Card: FC<DataProps> = ({ ...props }) => {
  const router = useRouter()
  const { title } = useTheme()
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const handleCloseModal = () => {
    router.push('/#portfolio')
  }

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 830) {
      setIsTouchDevice(true)
    }
  }, [router])
  function handleOpenDetails() {
    isTouchDevice
      ? router.push({
          pathname: `${props.id}`,
          query: { id: props.id }
        })
      : setModalIsOpen(true)
  }
  return (
    <StackBox>
      <Dialog.Root open={modalIsOpen} onOpenChange={setModalIsOpen}>
        <Styled.CardComponent type='button' onClick={handleOpenDetails}>
          <Styled.Image>
            <picture>
              <img
                loading='lazy'
                width={300}
                height={350}
                alt={props.alt}
                src={
                  title === 'light' ? props.coverAltLight : props.coverAltDark
                }
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
          </Styled.Image>
          <Heading size='small' as='h3'>
            {props.name}
          </Heading>
          <Dialog.Trigger style={{ border: 0 }}>
            <Modal onClose={handleCloseModal}>
              <CardContent {...props} />
            </Modal>
          </Dialog.Trigger>
        </Styled.CardComponent>
      </Dialog.Root>
    </StackBox>
  )
}
