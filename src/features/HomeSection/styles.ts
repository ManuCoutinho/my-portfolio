import styled, { css } from 'styled-components'
import { Container as ContainerBase } from 'components/Layout/Base'

export const Container = styled.section`
  ${({ theme }) => css`
    background: ${theme.colors.background};
    width: 100%;
    height: calc(100vh + 7rem);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.5rem;

    @media only screen and (max-width: 50em) {
      height: calc(100vh + 5rem);
    }

    @media only screen and (max-width: 27em) {
      height: calc(100vh + 5rem);
      flex-direction: column;
      gap: 0.5rem;
    }
  `}
`
export const Wrapper = styled(ContainerBase)`
  ${() => css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    @media only screen and (max-width: 50em) {
      margin-top: 0;
      flex-direction: column-reverse;
      gap: 0;
    }
  `}
`
export const BoxCenter = styled.div`
  ${({ theme }) => css`
    @media only screen and (min-width: 80em) {
      padding: 2rem 3rem;
    }

    @media only screen and (max-width: 50em) {
      font-size: ${theme.fontSize.xl};
      gap: 1rem;
      padding: 1rem 0;

      &:last-child {
        width: 300px;
      }
    }

    @media only screen and (max-width: 27em) {
      gap: 0;
      padding: 0;
    }

    font-family: ${theme.font.title};
    font-weight: ${theme.fontWeight.bold};
    font-size: ${theme.fontSize.xlg};
    line-height: 2.5rem;
    width: 100%;
  `}
`

export const BoxLottie = styled.div`
  ${() => css`
    width: 100%;

    @media only screen and (max-width: 50em) {
      width: 27rem;
      display: grid;
      place-content: center;
    }
    @media only screen and (max-width: 27em) {
      width: 20rem;
      display: grid;
      place-content: center;
    }
  `}
`
