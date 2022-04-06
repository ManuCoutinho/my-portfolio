import styled from 'styled-components'
import { Box, Container as ContainerBase } from '../Foundation/Base'

export const Container = styled.main`
  background: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ContainerWrapper = styled(ContainerBase)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  @media (max-width: 48em) {
    margin-top: 5rem;
    flex-direction: column;
  }
`
export const DivWrapper = styled(Box)`
  @media (max-width: 45em) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    gap: 1rem;
    padding: 1rem 0;
  }
  screen and @media (min-width: 80em) {
    padding: 2rem 3rem;
  }

  font-family: ${({ theme }) => theme.font.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  line-height: 2.5rem;
  width: 100%;
  margin-bottom: 1rem;
`
export const BoxAnimation = styled.div`
  text-align: center;
  align-self: center;

  width: 100%;
  p {
    margin-bottom: 0.5em;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
  span {
    text-transform: uppercase;
  }
`
