import styled, { css, keyframes } from 'styled-components'
import { Container } from 'components/StackBox/styles'

const fadeInFwd = keyframes`
 0% {
      transform: translateX(180px);
      opacity: 0;
    }
      100% {
      transform: translateX(0);
      opacity: 1;
    }
`
const fadeAnimation = css`
  animation: ${fadeInFwd} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`

export const Wrapper = styled(Container)<{ animate: boolean }>`
  ${({ animate }) => css`
    ${animate && fadeAnimation};
  `}
`
