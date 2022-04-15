import styled from 'styled-components'
import { LinkInternal } from '../Layout/Base'

const ContactSection = styled.section``

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 45em) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`

const BoxAnimation = styled.div`
  max-width: 350px;
`

const Email = styled(LinkInternal)`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: underline;
  }
`

export { ContactSection, Email, Container, BoxAnimation }
