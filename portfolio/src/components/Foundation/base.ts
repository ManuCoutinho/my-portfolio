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
export { Container, Box }
