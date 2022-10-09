import styled, { css, keyframes } from 'styled-components'

const borderAnimate = keyframes`
 0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
`
export const CardComponent = styled.button`
  ${({ theme }) => css`
    max-width: 20rem;
    max-height: 20rem;
    height: 100%;
    width: 100%;
    padding: 1rem 1rem 2rem 1rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    transition: ${theme.transition};
    position: relative;
    overflow: hidden;
    transition: ${theme.transition};
    background: rgba(0, 0, 0, 0.05);
    z-index: 5;
    &:hover {
      padding: 0 0 2rem 0;
    }
    & h3 {
      z-index: 20;
      &:first-letter {
        text-transform: capitalize;
        -webkit-text-shadow: -2px 2px 2px ${theme.colors.white};
      }
    }

    &::before {
      content: ' ';
      position: absolute;
      width: 100px;
      height: 200%;
      bottom: -50%;
      left: 25%;
      background: ${`linear-gradient(${theme.colors.border_1}, ${theme.colors.border_2})`};
      animation: ${borderAnimate} 6s linear infinite;
    }
    &::after {
      content: ' ';
      position: absolute;
      inset: 3px;
      background-color: ${theme.colors.bg_card};
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05)
      );
      border-radius: ${theme.radius.default};
    }
  `}
`

export const Image = styled.div`
  /* max-height: 15rem; */
  height: 100%;
  overflow: hidden;
  z-index: 20;
  picture,
  img {
    z-index: 20;
    width: 100%;
    height: auto;
    object-fit: contain;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  }
`
