import styled from 'styled-components'

export const Container = styled.header`
  border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.info};
  padding: 0.5rem;
  position: absolute;
  width: 100vw;
  z-index: 100;
`

export const Nav = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-between;

  max-width: 1440px;
  padding: 0.5rem 2.5rem;
  width: 100%;
`

export const LogoComponent = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  letter-spacing: -3px;
`

export const MenuList = styled.ul`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  list-style: none;

  a {
    padding: 0.5rem;
    transition: ${({ theme }) => theme.transition};
    &:hover {
      transform: scale(1.1);
      text-shadow: 0 2px 3px ${({ theme }) => theme.colors.highlight};
      transition: ${({ theme }) => theme.transition};
    }
  }
`

export const MenuItem = styled.li``
