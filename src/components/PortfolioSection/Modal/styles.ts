import styled from 'styled-components'
import { StackBoxCenter } from '../../Layout/Base'

type NavLinkProps = {
  color1: string
  color2: string
}
const ModalBody = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 45em) {
    flex-direction: column;
  }
`
const ModalHeader = styled.header<NavLinkProps>`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.info};
  margin-bottom: 0.8rem;
  transition: ${({ theme }) => theme.transition};
  h3 {
    color: ${({ theme }) => theme.colors.text};
    text-transform: uppercase;
  }

  a {
    color: ${(props) => props.color1};

    &:first-of-type {
      color: ${(props) => props.color2};
    }
  }

  a:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transition: ${({ theme }) => theme.transition};
  }

  a:active {
    color: ${({ theme }) => theme.colors.highlight};
  }
`
const ContainerHeader = styled(StackBoxCenter)`
  gap: 0;
`

const ModalFooter = styled.footer`
  width: 100%;
  align-content: flex-end;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;

  button {
    background: ${({ theme }) => theme.colors.secondary};
  }
`

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  img {
    width: auto;
    margin: 0 auto;
  }
`

const BoxInfos = styled(Content)`
  padding: 0;
`

export {
  ModalBody,
  ModalHeader,
  ModalFooter,
  Content,
  BoxInfos,
  ContainerHeader
}
