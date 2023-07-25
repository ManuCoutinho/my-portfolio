import Image from 'next/image'
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
			<Styled.Items
				ref={sliderRef}
				className='keen-slider'
				data-testid='slider-img'
			>
				{img?.map(({ id, imgPng, imgWebp, alt }) => (
					<Styled.Item id={id} key={uuidv4()} className='keen-slider__slide'>
						<picture>
							<Image
								src={imgWebp}
								priority
								alt={alt}
								layout='fill'
								quality={80}
							/>
							<source srcSet={imgPng} type='image/png' />
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
