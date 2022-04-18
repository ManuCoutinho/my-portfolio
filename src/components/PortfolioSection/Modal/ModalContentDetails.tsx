import Image from 'next/image'
import { StackBox, StackBoxCenter, Text } from '../../Layout/Base'
import { Content, ModalBody } from './styles'

import imgTeste from '../../../../public/assets/sample.webp'

const ModalContentDetails: React.FC = () => {
  return (
    <ModalBody id='details'>
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
  )
}

export default ModalContentDetails
