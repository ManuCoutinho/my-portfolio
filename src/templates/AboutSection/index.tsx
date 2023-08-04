import { useRef, FC } from 'react'
import Image from 'next/image'

import { useAnimate } from 'hooks/useAnimate'

import { Description } from 'modules/Description'
import { Carousel } from 'components/Carousel'
import { Heading } from 'components/Heading'

import * as Styled from './styles'

const girlImg = '/assets/perfil.webp'
const About: FC = () => {
	const aboutRef = useRef<HTMLDivElement>(null)
	const { onAnimate } = useAnimate(aboutRef)

	return (
		<Styled.Section id='about' ref={aboutRef}>
			<Heading size='big' as='h2'>
				Sobre
			</Heading>
			<Styled.Container>
				<Styled.WrapperImg data-state={onAnimate ? 'active' : 'inactive'}>
					<Image
						width='400'
						height='400'
						src={girlImg}
						loading='lazy'
						quality={80}
						alt='girl coding with cup in the left hand'
					/>
				</Styled.WrapperImg>
				<Description animate={onAnimate} />
			</Styled.Container>
			<Carousel />
		</Styled.Section>
	)
}

export default About
