import styled from 'styled-components'

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin: 0 auto;
  padding: 2rem 1rem;
  text-align: center;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  span {
    font-family: ${({ theme }) => theme.font.title};
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    color: ${({ theme }) => theme.colors.secondary};
    font-size: ${({ theme }) => theme.fontSize.lg};
    border-bottom: 1px solid ${({ theme }) => theme.colors.highlight};
  }

  @media (max-width: 48em) {
    flex-direction: column;
    font-size: ${({ theme }) => theme.fontSize.sm};
    gap: 0.5rem;
  }
`

export { FooterContainer }
