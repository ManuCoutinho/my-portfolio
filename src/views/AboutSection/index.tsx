import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Description } from 'features/Description'
import { Carousel } from 'components/Carousel'
import { useTheme } from 'styled-components'
import { Heading } from 'components/Heading'
import * as Styled from './styles'
import lightImg from '/public/assets/perfil.webp'
import darkImg from '/public/assets/perfil-green.webp'

const About: React.FC = () => {
  const theme = useTheme()
  const [animate, setAnimate] = useState(false)
  const sourceImg = theme.title === 'light' ? lightImg : darkImg

  function listenScrollToImg() {
    const imgOffsetWidth = 400
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop
    if (winScroll > imgOffsetWidth) {
      setAnimate(true)
    }
    if (winScroll < imgOffsetWidth) {
      setAnimate(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', () => listenScrollToImg())
    return window.removeEventListener('scroll', () => listenScrollToImg())
  }, [])

  return (
    <Styled.Section id='about'>
      <Heading size='big' as='h2'>
        Sobre
      </Heading>
      <Styled.Container>
        <Styled.WrapperImg animate={animate}>
          <Image
            width='300'
            height='300'
            src={sourceImg}
            loading='lazy'
            alt='girl coding with cup of coffee'
          />
        </Styled.WrapperImg>
        <Description animate={animate} />
      </Styled.Container>
      <Carousel />
    </Styled.Section>
  )
}

export default About
