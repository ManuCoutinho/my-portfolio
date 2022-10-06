import Image from 'next/image'
import { Description } from './Description'
import { Carousel } from './CarouselAbout'
import { StackBoxCenter, Title } from 'components/Layout/Base'
import { AboutSection, ContainerAbout } from './styles'
import { useTheme } from 'styled-components'

import lightImg from '../../../public/assets/perfil.webp'
import darkImg from '../../../public/assets/perfil-green.webp'

const About: React.FC = () => {
  const theme = useTheme()

  return (
    <AboutSection id='about'>
      <Title>Sobre</Title>
      <ContainerAbout>
        <StackBoxCenter>
          <Image
            width='300'
            height='300'
            src={theme.title === 'light' ? lightImg : darkImg}
            loading='lazy'
            alt='girl coding with cup of coffee'
          />
        </StackBoxCenter>
        <Description />
      </ContainerAbout>
      <Carousel />
    </AboutSection>
  )
}

export default About
