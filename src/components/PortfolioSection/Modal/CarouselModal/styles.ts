import styled from 'styled-components'

const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 1280px;
`

const Carousel = styled.div`
  height: calc(calc(calc(9 / 16) * 800px));
  contain: strict;
`

const CarouselItem = styled.div`
  /* scroll-item */
  width: 1100px;
  height: auto;

  img {
    object-fit: cover;
    width: 100%;
    height: auto;
    &:active {
      cursor: grabbing;
      cursor: -webkit-grabbing;
    }
  }
`
const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  margin: 0;
  padding: 0;
  list-style: none;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  @supports (scroll-snap-align: start) {
    scroll-snap-type: x mandatory;
  }

  @supports not (scroll-snap-align: start) {
    -webkit-scroll-snap-type: x mandatory;
    scroll-snap-type: x mandatory;
    -webkit-scroll-snap-destination: 0 80%;
    scroll-snap-destination: 0 80%;
    -webkit-scroll-snap-points-x: repeat(100%);
    scroll-snap-points-x: repeat(100%);
  }
`

const ListItem = styled.li`
  margin: 0 1vw;

  &:first-of-type {
    margin: 0;
  }

  @supports (scroll-snap-align: start) {
    scroll-snap-align: center;
  }

  @supports not (scroll-snap-align: start) {
    scroll-snap-coordinate: 0 0;
  }
`

const CarouselNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: auto;
  width: 100%;
  margin-top: 1vw;

  a {
    background: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.radius.full};
    z-index: 2;
    padding: 0.8rem;

    transition: ${({ theme }) => theme.transition};

    &:hover {
      box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);
      transition: ${({ theme }) => theme.transition};
    }

    &:active {
      background: ${({ theme }) => theme.colors.highlight};
    }
  }
`

export { Container, Carousel, CarouselItem, CarouselNav, List, ListItem }
