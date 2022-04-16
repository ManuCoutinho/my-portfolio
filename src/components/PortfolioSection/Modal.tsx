import Image from 'next/image'
import { StackBox, StackBoxCenter, Subtitle, Text } from '../Layout/Base'
import { Content, ModalBody, ModalFooter, ModalHeader } from './styles'

import imgTeste from '../../../public/assets/sample.webp'
import { ModalButton } from '../Layout/Buttons'

type PropsModal = {
  close(): void
}

const Modal: React.FC<PropsModal> = ({ close }) => {
  return (
    <>
      <ModalHeader>
        <Subtitle>Nome do Projeto</Subtitle>
      </ModalHeader>
      <ModalBody>
        <StackBoxCenter>
          <Content>
            <Image
              width={500}
              height={500}
              loading='lazy'
              alt='imag temporaria'
              src={imgTeste}
            />
            <StackBox>[DETAILS] [LIBS] [FRAMEWORKS] [STYLES] [LINKS]</StackBox>
          </Content>
          <Text>
            [DESCRIÇÃO]Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Possimus laboriosam ullam fugit ea! Dicta eius fuga libero dolore ex
            velit.
          </Text>
        </StackBoxCenter>
      </ModalBody>
      <ModalFooter>
        <ModalButton type='button' onClick={close}>
          Close
        </ModalButton>
      </ModalFooter>
    </>
  )
}
export default Modal
