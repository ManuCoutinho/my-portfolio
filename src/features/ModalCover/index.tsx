import { StackBox } from 'components/StackBox'
import dynamic from 'next/dynamic'

import { ModalCoverProps } from './types'

const Slider = dynamic(() => import('components/Slider'))

const ModalCover: React.FC<ModalCoverProps> = ({ img }) => {
  return (
    <StackBox id='overview' direction='column'>
      <Slider img={img} />
    </StackBox>
  )
}

export default ModalCover
