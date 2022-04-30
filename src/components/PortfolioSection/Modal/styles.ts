import styled from 'styled-components'
import { StackBoxCenter } from '../../Layout/Base'

type MenuLinkProps = {
  color1: string
  color2: string
}
const ModalBody = styled.div`
  display: grid;
  place-items: center;

  @media only screen and (max-width: 45em) {
    flex-direction: column;
  }
`
const ModalHeader = styled.header<MenuLinkProps>`
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
  padding-right: 2rem;
  display: block;
  position: absolute;
  bottom: 3vw;
  right: 0;
  z-index: 1;

  button {
    background: ${({ theme }) => theme.colors.secondary};
  }

  @media only screen and (max-width: 80em) {
    bottom: 1vw;
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
  overflow: hidden;

  img {
    width: 100%;
    height: 400px;
    content-fit: contain;
    margin: 0 auto;
  }
`

const BoxInfos = styled(Content)`
  padding: 0;
`

const Topic = styled.span`  
  font-weight: ${({ theme }) => theme.fontWeight.semibold});
  font-family: ${({ theme }) => theme.font.title};
  color: ${({ theme }) => theme.colors.info};
  font-size: ${({ theme }) => theme.fontSize.lg};  
`

const BoxDetails = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.8rem;
  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);
  -webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);
  transition: ${({ theme }) => theme.transition};

  a {
    font-size: ${({ theme }) => theme.fontSize.lg};
    padding: 0.5rem;
    filter: drop-shadow(12px -10px 5px rgba(0, 0, 0, 0.2));
    &:hover {
      color: ${({ theme }) => theme.colors.highlight};
      transition: ${({ theme }) => theme.transition};
    }
  }

  @media only screen and (max-width: 80em) {
    padding: 0.5rem;
    margin-bottom: 0.7rem;
  }
`

export {
  ModalBody,
  ModalHeader,
  ModalFooter,
  Content,
  BoxInfos,
  ContainerHeader,
  Topic,
  BoxDetails
}
