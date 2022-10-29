import styled, { css } from 'styled-components'
import { Icon } from '@iconify-icon/react'

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  padding: 1.5rem 2rem;
  margin: 1.5rem auto;
`

export const Slider = styled.div`
  display: flex;
  width: 100%;
`
export const Wrapper = styled.div`
  cursor: grabbing;
`

export const Content = styled(Icon)`
  ${({ theme }) => css`
    border-radius: ${theme.radius.medium};
    background: linear-gradient(
      145deg,
      ${theme.colors.carousel_1},
      ${theme.colors.carousel_2}
    );
    box-shadow: 13px 13px 20px ${theme.colors.carousel_3},
      -13px -13px 20px ${theme.colors.carousel_4};
    color: ${theme.colors.secondary};
    padding: 2rem 0;
    display: grid;
    place-content: center;
    margin: 2rem;

    font-size: ${theme.fontSize.xlg};
    transition: ${theme.transition};
    &:hover {
      transition: ${theme.transition};
      color: ${theme.colors.active};
    }
  `}
`
