import styled from 'styled-components'

const Container = styled.main`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`
const Box = styled.div`
  display: flex;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 45em) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`
const Title = styled.h2`
color: ${({ theme }) => theme.colors.title}
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5rem;
  margin-bottom: 1rem 0;
  padding: 0.5rem;
  text-align: center;
  text-transform: uppercase;
`
export { Container, Box, Title }
