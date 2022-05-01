import styled from 'styled-components'

const ContainerRouter = styled.section`
  width: 100%;
  height: calc(100vh - 2.5rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;

  button {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`
export { ContainerRouter }
