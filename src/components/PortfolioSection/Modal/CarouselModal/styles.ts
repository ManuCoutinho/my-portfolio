import styled from 'styled-components'

const ItemWrapper = styled.div`
  width: 100%;
`
const Items = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  scroll-behavior: smooth;
  -webkit-scroll-behavior: smooth;
  overflow: hidden;
  pointer-events: none;
`
const Item = styled.div`
  flex: none;

  width: 100%; //responsavel pela qtd de fotos
  height: 18.75rem;
  pointer-events: none;
  scroll-snap-align: start;
  webkit-scroll-snap-align: start;

  picture,
  img {
    width: 100%;
    object-fit: cover;
  }

  @media only screen and (min-width: 90.625em) {
    height: 60vh;
  }
`

const CarouselNav = styled.nav`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  margin-top: 0.5rem;

  a {
    padding: 0.5rem;
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.radius.full};
    z-index: 5;
  }
`

export { ItemWrapper, Item, Items, CarouselNav }
