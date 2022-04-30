import styled from 'styled-components'

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;

  font-size: ${({ theme }) => theme.fontSize.xl};

  background: ${({ theme }) => theme.colors.background};

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
export default Container
