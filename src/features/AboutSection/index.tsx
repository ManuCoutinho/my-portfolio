import Image from 'next/image'
import { Description } from '../Description'
import { Carousel } from '../../components/CarouselAbout'
import { AboutSection, ContainerAbout } from './styles'
import { useTheme } from 'styled-components'

import lightImg from '../../../public/assets/perfil.webp'
import darkImg from '../../../public/assets/perfil-green.webp'
import { StackBox } from 'components/StackBox'
import { Heading } from 'components/Heading'

const About: React.FC = () => {
  const theme = useTheme()

  return (
    <AboutSection id='about'>
      <Heading size='big' as='h2'>
        Sobre
      </Heading>
      <ContainerAbout>
        <StackBox>
          <Image
            width='300'
            height='300'
            src={theme.title === 'light' ? lightImg : darkImg}
            loading='lazy'
            alt='girl coding with cup of coffee'
          />
        </StackBox>
        <Description />
      </ContainerAbout>
      <Carousel />
    </AboutSection>
  )
}

export default About
