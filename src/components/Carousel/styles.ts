import styled, { css } from 'styled-components'
import { Icon } from '@iconify-icon/react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export const Container = styled.div`
  width: 100%;
  height: 50vh;
  padding: 1.5rem 2rem;
  margin: 1.5rem auto;
`

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`

export const Content = styled(Icon)`
  ${({ theme }) => css`
    border-radius: ${theme.radius.medium};
    background: linear-gradient(
      145deg,
      ${theme.colors.carousel_1},
      ${theme.colors.carousel_2}
    );
    box-shadow: 13px 13px 22px ${theme.colors.carousel_3},
      -13px -13px 22px ${theme.colors.carousel_4};
    color: ${theme.colors.secondary};
    padding: 2rem 3rem;
    margin: 1.5rem;
    text-align: center;
    font-size: ${theme.fontSize.xlg};
  `}
`
