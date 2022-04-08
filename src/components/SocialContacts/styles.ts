import styled from 'styled-components'
import { LinkInternal } from '../Foundation/Base'

const Container = styled.nav`
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  transition: ${({ theme }) => theme.transition};
`

const ContactItem = styled(LinkInternal)`
  &:hover {
    transition: ${({ theme }) => theme.transition};
    transform: scale(1.2);
    color: ${({ theme }) => theme.colors.white};

    filter: drop-shadow(5px 5px 10px ${({ theme }) => theme.colors.highlight});
  }
`

export { Container, ContactItem }
