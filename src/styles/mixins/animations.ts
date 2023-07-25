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

const trackingOut = keyframes`
 0% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
`

const trackingInContact = keyframes`
 0% {
    letter-spacing: 1em;
    opacity: 0;
  }
  25% {
    opacity: 0.6;
  }
  50% {
		letter-spacing: normal;
    opacity: 1;
	}
	60% {
		letter-spacing: normal;
    opacity: 1;
	}
	70% {
		letter-spacing: normal;
    opacity: 1;
	}
	80% {
		letter-spacing: normal;
    opacity: 1;
	}
	90% {
		letter-spacing: normal;
    opacity: 1;
	}
	100% {
    letter-spacing: -0.5em;
    opacity: 0;
  }
`
const fadeOut = keyframes`
 0% {
    transform: translateZ(0);
    opacity: 1;
  }
  100% {
    transform: translateZ(-80px);
    opacity: 0;
  }
`
export const trackingInTitle = css`
	animation: ${trackingInContact} 3.5s cubic-bezier(0.645, 0.045, 0.355, 1) 1.5s
		both;
`

export const trackingOutText = css`
	animation: ${trackingOut} 0.7s cubic-bezier(0.55, 0.085, 0.68, 0.53) 4.5s both;
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
export const fadeOutPage = css`
	animation: ${fadeOut} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) 4.6s both;
`
export const fadeInPage = css`
	animation: ${fadeIn} 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
`
