import styled from 'styled-components'
import { Box, Container } from '../Layout/Base'

const ContainerHome = styled.main`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: calc(100vh + 7rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  @media only screen and (max-width: 27em) {
    height: calc(100vh + 8rem);
    flex-direction: column;
  }
`
const ContainerWrapper = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media only screen and (max-width: 50em) {
    margin-top: 0;
    flex-direction: column-reverse;
    gap: 0;
  }
`
const DivWrapper = styled(Box)`
  @media only screen and (max-width: 45em) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    gap: 1rem;
    padding: 1rem 0;

    &:last-child {
      width: 300px;
    }
  }
  @media only screen and (min-width: 80em) {
    padding: 2rem 3rem;
  }
  @media only screen and (max-width: 27em) {
    gap: 0;
    padding: 0;
  }

  font-family: ${({ theme }) => theme.font.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  line-height: 2.5rem;
  width: 100%;
`
const BoxAnimation = styled.div`
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
  @media only screen and (max-width: 50em) {
    margin-bottom: 1rem;
  }
`
export { BoxAnimation, ContainerWrapper, ContainerHome, DivWrapper }
