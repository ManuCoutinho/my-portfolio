import styled from 'styled-components'

const Container = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-content: center;

  font-size: ${({ theme }) => theme.fontSize.xl};

  background: linear-gradient(
    160deg,
    ${({ theme }) => theme.colors.glass},
    ${({ theme }) => theme.colors.highlight},
    ${({ theme }) => theme.colors.white},
    ${({ theme }) => theme.colors.glass}
  );
`
export default Container
