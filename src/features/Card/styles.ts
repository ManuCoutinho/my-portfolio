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
    min-width: 300px;
    min-height: 333px;
    height: 100%;
    width: 100%;
    padding: 1rem 1rem 2rem 1rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    /* border-radius: 20px; */
    border: 0;
    transition: ${theme.transition};
    position: relative;
    overflow: hidden;
    transition: ${theme.transition};
    background: #fffaeb;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    z-index: 5;
    &:hover {
      padding: 0 0 2rem 0;
    }

    /* &::before {
      content: ' ';
      position: absolute;
      width: 100px;
      height: 200%;
      bottom: -50%;
      left: 25%;
      background: ${`linear-gradient(${theme.colors.border_1}, ${theme.colors.border_2})`};
      animation: ${borderAnimate} 6s linear infinite;
    } */
    &::after {
      content: ' ';
      position: absolute;
      /* inset: 0; */
      width: 86%;
      height: 80%;
      left: 22px;
      /* right: 10px; */
      top: 20px;
      background-color: #fffefa;
      background-image: linear-gradient(
        to left,
        rgba(255, 255, 255, 0.05),
        rgba(255, 255, 255, 0.05)
      );
      filter: sepia(0.2);

      /* border-radius: ${theme.radius.default}; */
    }
  `}
`

export const Image = styled.div`
  min-height: 15rem;
  height: 100%;
  overflow: hidden;
  z-index: 20;
  picture,
  img {
    z-index: 20;
    width: 100%;
    max-height: 15rem;
    height: auto;
    object-fit: contain;
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  }
`
export const Div = styled.div`
  ${({ theme }) => css`
    margin: 0 auto;
    z-index: 20;
    & h3 {
      &:first-letter {
        text-transform: capitalize;
        -webkit-text-shadow: -2px 2px 2px ${theme.colors.white};
      }
    }
  `}
`
