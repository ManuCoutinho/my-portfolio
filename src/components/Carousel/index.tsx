import Slider from 'react-slick'
import { v4 as uuidv4 } from 'uuid'
import { Heading } from 'components/Heading'
import icons from 'constants/icons'
import * as Styled from './styles'

export const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    centerMode: true,
    adaptiveHeight: true,
    rows: 1,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,

    autoplaySpeed: 2000,
    cssEase: 'linear',
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 880,
        settings: {
          slidesToShow: 3,
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

  const set1 = [
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

  const set2 = [
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
  return (
    <>
      <Styled.Container>
        <Heading as='h4' size='small'>
          Minhas Skills:
        </Heading>
        <Slider {...settings}>
          {set1.map((item) => (
            <Styled.Wrapper key={uuidv4()}>
              <Styled.Content icon={item.icon} />
            </Styled.Wrapper>
          ))}
        </Slider>

        <Slider {...settings} rtl={true}>
          {set2.map((item) => (
            <Styled.Wrapper key={uuidv4()}>
              <Styled.Content icon={item.icon} />
            </Styled.Wrapper>
          ))}
        </Slider>
      </Styled.Container>
    </>
  )
}
