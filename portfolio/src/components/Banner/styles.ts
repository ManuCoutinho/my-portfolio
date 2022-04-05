import styled from 'styled-components'
import { Box } from '../Foundation/base'

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
`

export const DivWrapper = styled(Box)`
  @media (max-width: 45em) {
    font-size: ${({ theme }) => theme.fontSize.xl};
    gap: 1rem;
    padding: 1rem 0;
    height: 100vh;
  }
  gap: 2rem;
  padding: 2rem 3rem;
  width: 100%;

  font-family: ${({ theme }) => theme.font.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xlg};
  line-height: 2.5rem;
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
