import styled, { css } from 'styled-components'
import { Icon } from '@iconify-icon/react'

export const ItemWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`
export const Items = styled.div`
  display: flex;
  overflow: hidden;
  max-height: 45rem;
  cursor: grabbing;
`
export const Item = styled.div`
  ${() => css`
    width: 100%;
    max-height: 40rem;
    overflow: hidden;

    picture,
    img {
      width: 100%;
      object-fit: contain;
      height: 100%;
    }

    @media only screen and (min-width: 90.625em) {
      height: 60vh;
    }
  `}
`
export const ArrowLeft = styled(Icon)`
  ${({ theme }) => css`
    padding: 1rem;
    color: ${theme.colors.primary};
    transition: color 0.25s ease-in-out;
    font-size: 4rem;
    outline: 1;
    outline: transparent;
    position: absolute;
    bottom: 50%;
    cursor: pointer;
    &:hover {
      color: ${theme.colors.active};
      transition: color 0.25s ease-in-out;
    }
  `}
`
export const ArrowRight = styled(Icon)`
  ${({ theme }) => css`
    padding: 1rem;
    color: ${theme.colors.primary};
    transition: color 0.25s ease-in-out;
    font-size: 4rem;
    outline: 1;
    outline: transparent;
    position: absolute;
    bottom: 50%;
    cursor: pointer;
    right: 0;
    &:hover {
      color: ${theme.colors.active};
      transition: color 0.25s ease-in-out;
    }
  `}
`
