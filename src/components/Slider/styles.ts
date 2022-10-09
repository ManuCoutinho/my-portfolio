import styled, { css } from 'styled-components'

export const ItemWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`
export const Items = styled.div`
  display: flex;
  overflow: hidden;
  max-height: 35rem;
  cursor: grabbing;
`
export const Item = styled.div`
  width: 100%;
  height: 30rem;
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
  ${() => css`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: nowrap;
    gap: 1rem;
    margin-top: 1rem;
    overflow: hidden;
    padding-bottom: 0.5rem;

    cursor: pointer;
  `}
`
export const NavItem = styled.span`
  ${({ theme }) => css`
    padding: 0.5rem;
    color: ${theme.colors.primary};
    transition: color 0.25s ease-in-out;
    font-size: 1.75rem;
    outline: 1;
    outline: transparent;
    &:hover {
      color: ${theme.colors.active};
      transition: color 0.25s ease-in-out;
    }
  `}
`
