import dynamic from 'next/dynamic'

import { StackBoxCenter } from '../../Layout/Base'
import { ModalBody } from './styles'

const Carousel = dynamic(() => import('../Modal/CarouselModal'))

export const ModalContent: React.FC = () => {
  return (
    <ModalBody id='overview'>
      <StackBoxCenter>
        <Carousel />
      </StackBoxCenter>
    </ModalBody>
  )
}
