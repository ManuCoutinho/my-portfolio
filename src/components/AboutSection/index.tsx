import Image from 'next/image'
import { Description } from './Description'
import { Carousel } from './CarouselAbout'
import { StackBoxCenter, Title } from '../Layout/Base'
import { AboutSection, ContainerAbout } from './styles'

import lightImg from '../../../public/assets/perfil.webp'
import darkImg from '../../../public/assets/perfil-green.webp'
import { useContext } from 'react'
import { SwitchThemeContext } from '../Contexts/SwitchThemeContext'

const About: React.FC = () => {
  const { theme } = useContext(SwitchThemeContext)

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
