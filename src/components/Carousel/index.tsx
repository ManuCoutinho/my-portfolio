import { useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { Heading } from 'components/Heading'
import icons from 'constants/icons'
import * as Styled from './styles'
import { useKeenSlider } from 'keen-slider/react'
import { KeenSliderInstance, KeenSliderOptions } from 'keen-slider'

export const Carousel: React.FC = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const keenOptions: KeenSliderOptions = {
    loop: true,
    drag: true,
    mode: 'free-snap',
    slides: {
      perView: 2,
      spacing: 8
    },
    breakpoints: {
      '(min-width: 480px)': {
        slides: { perView: 3, spacing: 20 }
      },
      '(min-width:768px)': {
        slides: { perView: 4, spacing: 20 }
      }
    }
  }
  const sliderAction = [
    (slider: KeenSliderInstance) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() {
        clearTimeout(timeout)
      }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => {
          slider.next()
        }, 2000)
      }
      slider.on('created', () => {
        slider.container.addEventListener('mouseover', () => {
          mouseOver = true
          clearNextTimeout()
        })
        slider.container.addEventListener('mouseout', () => {
          mouseOver = false
          nextTimeout()
        })
        nextTimeout()
      })
      slider.on('dragStarted', clearNextTimeout)
      slider.on('animationEnded', nextTimeout)
      slider.on('updated', nextTimeout)
    }
  ]
  const [carousel1Ref, instance1Ref] = useKeenSlider<HTMLDivElement>(
    keenOptions,
    sliderAction
  )
  const [carousel2Ref, instance2Ref] = useKeenSlider<HTMLDivElement>(
    { ...keenOptions, rtl: true },
    sliderAction
  )

  const SET1 = [
    { icon: icons.html },
    { icon: icons.jquery },
    { icon: icons.react },
    { icon: icons.sass },
    { icon: icons.js },
    { icon: icons.node },
    { icon: icons.sb },
    { icon: icons.sentry },
    { icon: icons.graphql },
    { icon: icons.figma },
    { icon: icons.testing },
    { icon: icons.gh }
  ]

  const SET2 = [
    { icon: icons.ts },
    { icon: icons.styled },
    { icon: icons.next },
    { icon: icons.vite },
    { icon: icons.jamstack },
    { icon: icons.tailwind },
    { icon: icons.mui },
    { icon: icons.chakra },
    { icon: icons.jest },
    { icon: icons.bs },
    { icon: icons.css },
    { icon: icons.git }
  ]

  useEffect(() => {
    instance1Ref.current?.update(keenOptions)
    instance2Ref.current?.update({ ...keenOptions, rtl: true })
  }, [instance1Ref, instance2Ref, keenOptions])
  return (
    <Styled.Container>
      <Heading as='h4' size='small'>
        Minhas Skills:
      </Heading>
      <Styled.Slider className='keen-slider' ref={carousel1Ref}>
        {SET1.map((item) => (
          <Styled.Wrapper key={uuidv4()} className='keen-slider__slide'>
            <Styled.Content icon={item.icon} />
          </Styled.Wrapper>
        ))}
      </Styled.Slider>

      <Styled.Slider className='keen-slider' ref={carousel2Ref}>
        {SET2.map((item) => (
          <Styled.Wrapper key={uuidv4()} className='keen-slider__slide'>
            <Styled.Content icon={item.icon} />
          </Styled.Wrapper>
        ))}
      </Styled.Slider>
    </Styled.Container>
  )
}
