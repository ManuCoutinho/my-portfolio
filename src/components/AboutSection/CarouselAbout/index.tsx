import Slider from 'react-slick'
import {
  SiTypescript,
  SiStyledcomponents,
  SiNextdotjs,
  SiVite,
  SiJamstack,
  SiTailwindcss,
  SiMaterialui,
  SiChakraui,
  SiJest
} from 'react-icons/si'
import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiGithubBadge,
  DiHtml5,
  DiJqueryLogo,
  DiJsBadge,
  DiReact,
  DiSass
} from 'react-icons/di'
import { CarouselItem } from './CarouselItem'

import { ContainerCarousel } from './styles'
import { Subtitle } from '../../Layout/Base'

export const Carousel = () => {
  const settings = {
    dots: true,
    centerMode: true,
    adaptiveHeight: true,
    rows: 2,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 2,
          row: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  }
  return (
    <ContainerCarousel>
      <Subtitle>Minhas Skills:</Subtitle>
      <Slider {...settings}>
        <CarouselItem>
          <DiCss3 />
        </CarouselItem>

        <CarouselItem>
          <DiBootstrap />
        </CarouselItem>

        <CarouselItem>
          <DiGit />
        </CarouselItem>

        <CarouselItem>
          <DiHtml5 />
        </CarouselItem>

        <CarouselItem>
          <DiJsBadge />
        </CarouselItem>

        <CarouselItem>
          <DiGithubBadge />
        </CarouselItem>

        <CarouselItem>
          <DiJqueryLogo />
        </CarouselItem>

        <CarouselItem>
          <DiReact />
        </CarouselItem>

        <CarouselItem>
          <DiSass />
        </CarouselItem>

        <CarouselItem>
          <SiTypescript />
        </CarouselItem>

        <CarouselItem>
          <SiNextdotjs />
        </CarouselItem>

        <CarouselItem>
          <SiTailwindcss />
        </CarouselItem>

        <CarouselItem>
          <SiMaterialui />
        </CarouselItem>
        <CarouselItem>
          <SiChakraui />
        </CarouselItem>
        <CarouselItem>
          <SiJamstack />
        </CarouselItem>
        <CarouselItem>
          <SiVite />
        </CarouselItem>
        <CarouselItem>
          <SiStyledcomponents />
        </CarouselItem>
        <CarouselItem>
          <SiJest />
        </CarouselItem>
      </Slider>
    </ContainerCarousel>
  )
}
