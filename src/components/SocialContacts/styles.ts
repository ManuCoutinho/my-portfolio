import styled from 'styled-components'
import { LinkInternal } from '../Layout/Base'
import { StylesProps } from './types'

const Container = styled.nav<StylesProps>`
  vertical-align: middle;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 2rem;
  transition: ${({ theme }) => theme.transition};
  display: ${(props) => props.display || 'block'};

  @media (max-width: 27em) {
    display: flex;
  }
`

const ContactItem = styled(LinkInternal)`
  margin: 0.5rem;
  &:hover {
    transition: ${({ theme }) => theme.transition};
    transform: scale(1.2);

    filter: drop-shadow(-5px 2px 3px ${({ theme }) => theme.colors.highlight});
  }
`

export { Container, ContactItem }
