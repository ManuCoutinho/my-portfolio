import { StackBox } from 'components/StackBox'
import dynamic from 'next/dynamic'

import { CardContentCoverProps } from './types'

const Slider = dynamic(() => import('components/Slider'))

const CardContentCover: React.FC<CardContentCoverProps> = ({ img }) => {
  return (
    <StackBox id='overview' direction='column'>
      <Slider img={img} />
    </StackBox>
  )
}

export default CardContentCover
