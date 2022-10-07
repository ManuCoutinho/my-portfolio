import { useKeenSlider } from 'keen-slider/react'
import { v4 as uuidv4 } from 'uuid'
import { ModalCoverProps } from 'features/ModalCover/types'

import * as Styled from './styles'
import { CaretLeft, CaretRight } from 'phosphor-react'
import Image from 'next/image'

const Slider: React.FC<ModalCoverProps> = ({ img }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    mode: 'free-snap'
  })
  console.log()
  return (
    <Styled.ItemWrapper>
      <Styled.Items ref={sliderRef} className='keen-slider'>
        {img?.map((data) => (
          <Styled.Item
            id={data.id}
            key={uuidv4()}
            className='keen-slider__slide'
          >
            <picture>
              <img
                src={data.imgPng}
                loading='lazy'
                alt={data.alt}
                width='500'
                height='200'
              />
              <source srcSet={data.imgWebp} type='image/webp' />
            </picture>
          </Styled.Item>
        ))}
      </Styled.Items>
      <Styled.CarouselNav>
        <CaretLeft size={32} onClick={() => instanceRef.current?.prev()} />
        <CaretRight size={32} onClick={() => instanceRef.current?.next()} />
      </Styled.CarouselNav>
    </Styled.ItemWrapper>
  )
}

export default Slider
