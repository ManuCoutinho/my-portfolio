import Image from 'next/image'
import { Description } from './Description'
import { Carousel } from './CarouselAbout'

import { StackBoxCenter, Title } from '../Foundation/Base'
import { AboutSection, ContainerAbout } from './styles'

import aboutImg from '../../../public/assets/perfil.webp'

export const About: React.FC = () => {
  return (
    <AboutSection id='about'>
      <Title>Sobre</Title>
      <ContainerAbout>
        <StackBoxCenter>
          <Image
            width='300'
            height='300'
            src={aboutImg}
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
