import styled from 'styled-components'
import { FiMenu, FiX } from 'react-icons/fi'
import { LinkInternal } from '../Layout/Base'

type MenuProps = {
  active: boolean
}

type ActiveLink = {
  color: string
}

const Container = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.info};
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  user-select: none;
  z-index: 1024;

  background: ${({ theme }) => theme.colors.glass};
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(15px) saturate(180%);
  -webkit-backdrop-filter: blur(15px) saturate(180%);
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;
  transition: ${({ theme }) => theme.transition};

  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2.5rem;
  width: 100%;

  @media (max-width: 52em) {
    margin-bottom: 1rem;
  }
`

const LogoComponent = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xlg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -3px;
  text-shadow: -2px -1px 3px ${({ theme }) => theme.colors.highlight};
  padding: 2rem 0;
  transition: ${({ theme }) => theme.transition};
  span {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-family: ${({ theme }) => theme.font.text};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }

  &:hover {
    transition: ${({ theme }) => theme.transition};
    text-shadow: 4px 2px 3px ${({ theme }) => theme.colors.highlight};
  }
`

const MenuList = styled.ul<MenuProps>`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  list-style: none;
  align-items: center;

  @media (max-width: 52em) {
    flex-direction: column;
    align-items: flex-end;
    gap: 1rem;
    max-height: ${({ active }) => (active ? '28rem' : '0')};
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
    width: 100%;
  }
`

const MenuItem = styled.li``

const NavLink = styled(LinkInternal)<ActiveLink>`
  padding: 2rem;
  transition: ${({ theme }) => theme.transition};
  color: ${({ color }) => color || ''};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    text-shadow: 0 2px 3px ${({ theme }) => theme.colors.highlight};
    transition: ${({ theme }) => theme.transition};
  }

  @media only screen and (max-width: 52rem) {
    padding: 0.8rem;
  }
`
const Hamburger = styled(FiMenu)`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.text};
`

const Close = styled(FiX)`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.text};
`

const ToggleMenu = styled.button`
  background: transparent;
  outline: 0;
  border: 0;
  display: none;

  @media (max-width: 52em) {
    display: flex;
  }
`
export {
  Container,
  LogoComponent,
  Hamburger,
  MenuItem,
  MenuList,
  Nav,
  ToggleMenu,
  NavLink,
  Close
}
