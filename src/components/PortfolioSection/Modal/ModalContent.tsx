import dynamic from 'next/dynamic'

import { StackBoxCenter } from '../../Layout/Base'
import { ModalBody } from './styles'
import { CarouselProps } from './types'

const Carousel = dynamic(() => import('../Modal/CarouselModal'))

export const ModalContent: React.FC<CarouselProps> = ({ img }) => {
  return (
    <ModalBody id='overview'>
      <StackBoxCenter>
        <Carousel img={img} />
      </StackBoxCenter>
    </ModalBody>
  )
}
