import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const ContainerCarousel = styled.div`
  width: 100%;
  height: 350px;
  padding: 1.5rem 2rem;
  margin: 1.5rem auto;
`

const Item = styled.div`
  border-radius: ${({ theme }) => theme.radius.medium};
  background: linear-gradient(
    145deg,
    ${({ theme }) => theme.colors.carousel_1},
    ${({ theme }) => theme.colors.carousel_2}
  );
  box-shadow: 13px 13px 54px ${({ theme }) => theme.colors.carousel_3},
    -13px -13px 54px ${({ theme }) => theme.colors.carousel_4};
  color: ${({ theme }) => theme.colors.secondary};
  width: 6.25rem;
  height: 6.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;

  svg {
    font-size: ${({ theme }) => theme.fontSize.xlg};
  }
`

export { ContainerCarousel, Item }
