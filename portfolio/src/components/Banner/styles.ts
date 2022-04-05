import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 50vh;
  background: ${({ theme }) => theme.colors.background};
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`

export const DivWrapper = styled.div`
  padding: 2rem;
  width: 100%;

  font-family: ${({ theme }) => theme.font.title};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize.xl};
  line-height: 2.5rem;
  margin: 0 auto;

  p {
    margin-bottom: 0.5em;
    font-weight: 100;
  }
  span {
    text-transform: uppercase;
    font-size: 4rem;
  }
`
