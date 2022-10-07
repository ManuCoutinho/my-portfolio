import styled, { css } from 'styled-components'

export const ItemWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`
export const Items = styled.div`
  display: flex;
`
export const Item = styled.div`
  width: 100%;
  height: 80%;
  overflow: hidden;

  picture,
  img {
    width: 100%;
    object-fit: fill;
    height: auto;
  }

  @media only screen and (min-width: 90.625em) {
    height: 60vh;
  }
`
export const CarouselNav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    gap: 1rem;
    margin-top: 0.5rem;

    cursor: pointer;
    &:hover {
      color: ${theme.colors.highlight};
    }
  `}
`
