import { useKeenSlider } from 'keen-slider/react'

import { v4 as uuidv4 } from 'uuid'
import icons from 'constants/icons'
import { SliderProps } from './types'
import * as Styled from './styles'

const Slider: React.FC<SliderProps> = ({ img }) => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    drag: true,
    mode: 'free-snap'
  })

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
      <Styled.ArrowLeft
        icon={icons.chevron_left}
        onClick={() => instanceRef.current?.prev()}
      />
      <Styled.ArrowRight
        icon={icons.chevron_right}
        onClick={() => instanceRef.current?.next()}
      />
    </Styled.ItemWrapper>
  )
}

export default Slider
