import { keyframes, css } from 'styled-components'

const fadeIn = keyframes`
0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`

const slideInBottom = keyframes`
 0% {
      transform: translateY(200px);
      opacity: 0;
    }
      100% {
      transform: translateY(0);
      opacity: 1;
    }
`

const slideInLeft = keyframes`
 0% {
      transform: translateX(200px);
      opacity: 0;
    }
      100% {
      transform: translateX(0);
      opacity: 1;
    }
`

const swingIn = keyframes`
  0% {
    transform: rotateX(-100deg);
    transform-origin: top;
    opacity: 0;
  }
  100% {
    transform: rotateX(0deg);
    transform-origin: top;
    opacity: 1;
  }

`
const slideInRight = keyframes`
 0% {
      transform: translateX(-200px);
      opacity: 0;
    }
      100% {
      transform: translateX(0);
      opacity: 1;
    }
`

export const swingInTop = css`
	animation: ${swingIn} cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
`

export const fadeInAnimation = css`
	animation: ${fadeIn} 1.5s cubic-bezier(0.39, 0.575, 0.565, 1) 0.5s both;
`

export const slideInAnimation = css`
	animation: ${slideInLeft} 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s both;
`
export const slideInBottomAnimation = css`
	animation: ${slideInBottom} 0.6s cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s both;
`
export const slideInRightAnimation = css`
	animation: ${slideInRight} 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s both;
`
