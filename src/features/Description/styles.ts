import styled, { css, keyframes } from 'styled-components'
import { Container } from 'components/StackBox/styles'

const SlideInFwd = keyframes`
 0% {
      transform: translateX(200px);
      opacity: 0;
    }
      100% {
      transform: translateX(0);
      opacity: 1;
    }
`
const SlideInBottom = keyframes`
 0% {
      transform: translateY(200px);
      opacity: 0;
    }
      100% {
      transform: translateY(0);
      opacity: 1;
    }
`
const fadeAnimation = css`
  animation: ${SlideInFwd} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  @media only screen and (max-width: 67.5em) {
    animation: ${SlideInBottom} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
`

export const Wrapper = styled(Container)<{ animate: boolean }>`
  ${({ animate }) => css`
    ${animate && fadeAnimation};
  `}
`
