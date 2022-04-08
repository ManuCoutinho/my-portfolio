import styled from 'styled-components'

const AboutSection = styled.section`
  width: 100%;
  padding: 1.5rem 0.5rem;
  margin: 0 auto;
`
const ContainerAbout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin: 4rem 0;

  @media (max-width: 48em) {
    flex-direction: column;
    gap: 2rem;
  }
`
const Text = styled.p`
  user-select: none;
  line-height: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  color: ${({ theme }) => theme.colors.text};
  word-wrap: break-word;
  padding: 0.5rem;
`
export { AboutSection, ContainerAbout, Text }
