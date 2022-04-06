import styled from 'styled-components'
import { FiMenu } from 'react-icons/fi'

type MenuProps = {
  active: boolean
}
export const Container = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.info};
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100vw;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1024;
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background: transparent;
  position: relative;

  margin: 0 auto;
  max-width: 1440px;
  padding: 0.5rem 2.5rem;
  width: 100%;
`

export const LogoComponent = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -3px;
  text-shadow: -2px -1px 3px ${({ theme }) => theme.colors.highlight};
  span {
    font-family: ${({ theme }) => theme.font.text};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`

export const MenuList = styled.ul<MenuProps>`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  list-style: none;

  a {
    padding: 1rem 2rem;
    transition: ${({ theme }) => theme.transition};
    &:hover {
      color: ${({ theme }) => theme.colors.text};
      transform: scale(1.05);
      text-shadow: 0 2px 3px ${({ theme }) => theme.colors.highlight};
      transition: ${({ theme }) => theme.transition};
    }
  }
  @media (max-width: 48em) {
    background-color: ${({ theme }) => theme.colors.background};
    align-items: center;
    flex-direction: column;
    max-height: ${({ active }) => (active ? '28rem' : '0')};
    overflow: hidden;
    transition: ${({ theme }) => theme.transition};
    width: 100%;
  }
`

export const MenuItem = styled.li``
export const Hamburger = styled(FiMenu)`
  font-size: 2em;
`
export const ToggleMenu = styled.button`
  cursor: pointer;
  background: transparent;
  outline: 0;
  border: 0;
  display: none;

  @media (max-width: 48em) {
    display: flex;
  }
`
