import { StackBox } from 'components/StackBox'
import dynamic from 'next/dynamic'
import { ModalBody } from './styles'
import { CarouselProps } from './types'

const Carousel = dynamic(() => import('../Modal/CarouselModal'))

const ModalContent: React.FC<CarouselProps> = ({ img }) => {
  return (
    <ModalBody id='overview'>
      <StackBox>
        <Carousel img={img} />
      </StackBox>
    </ModalBody>
  )
}

export default ModalContent
