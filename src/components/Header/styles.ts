import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'
import { LinkInternal } from '../Layout/Base'

type MenuProps = {
  active: boolean
}
const Container = styled.header`
  background: ${({ theme }) => theme.colors.background};
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.info};
  margin-bottom: 1rem;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  user-select: none;
  z-index: 1024;

  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 1px 1px 2px 1px rgba(86, 102, 124, 0.25);
`

const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: relative;

  margin: 0 auto;
  max-width: 1100px;
  padding: 0 2.5rem;
  width: 100%;
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

  @media (max-width: 50em) {
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    flex-direction: column;
    max-height: ${({ active }) => (active ? '28rem' : '0')};
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
    width: 100%;
  }
`

const MenuItem = styled.li``

const NavLink = styled(LinkInternal)`
  padding: 2rem;
  transition: ${({ theme }) => theme.transition};
  &:hover {
    color: ${({ theme }) => theme.colors.text};
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    text-shadow: 0 2px 3px ${({ theme }) => theme.colors.highlight};
    transition: ${({ theme }) => theme.transition};
  }

  @media only screen and (max-width: 50rem) {
    padding: 0.8rem;
  }
`
const Hamburger = styled(FiMenu)`
  font-size: 2em;
  color: ${({ theme }) => theme.colors.text};
`
const ToggleMenu = styled.button`
  cursor: pointer;
  background: transparent;
  outline: 0;
  border: 0;
  display: none;

  @media (max-width: 50em) {
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
  NavLink
}
