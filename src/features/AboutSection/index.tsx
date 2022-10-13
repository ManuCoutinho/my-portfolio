import Image from 'next/image'
import { Description } from '../Description'
import { Carousel } from 'components/Carousel'
import { useTheme } from 'styled-components'
import { Heading } from 'components/Heading'
import * as Styled from './styles'
import lightImg from '/public/assets/perfil.webp'
import darkImg from '/public/assets/perfil-green.webp'

const About: React.FC = () => {
  const theme = useTheme()
  const sourceImg = theme.title === 'light' ? lightImg : darkImg
  return (
    <Styled.Section id='about'>
      <Heading size='big' as='h2'>
        Sobre
      </Heading>
      <Styled.Container>
        <Styled.WrapperImg>
          <Image
            width='300'
            height='300'
            src={sourceImg}
            loading='lazy'
            alt='girl coding with cup of coffee'
          />
        </Styled.WrapperImg>
        <Description />
      </Styled.Container>
      <Carousel />
    </Styled.Section>
  )
}

export default About
