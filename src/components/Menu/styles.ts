import styled, { css } from 'styled-components'
import { MenuStyleProps } from './types'

export const MenuList = styled.ul<MenuStyleProps>`
  ${({ theme, active }) => css`
    display: flex;
    font-size: ${theme.fontSize.md};
    font-weight: ${theme.fontWeight.semibold};
    list-style: none;
    align-items: center;
    transition: ${theme.transition};

    @media (max-width: 52em) {
      flex-direction: column;
      align-items: center;
      margin-top: ${active && '5rem'};
      gap: 2rem;
      height: ${active ? '100vh' : '0'};
      overflow: hidden;
      transition: ${theme.transition};
      width: 100%;
    }
  `}
`
export const MenuItem = styled.li``

export const NavLink = styled.a<{ color?: string }>`
  ${({ theme, color }) => css`
    padding: 2rem;
    transition: color ease-in-out 0.25s;
    font-size: 1.15rem;
    color: ${color || ''};
    &:hover {
      color: ${theme.colors.text};
      text-shadow: 0 2px 3px ${theme.colors.highlight};
      transition: color ease-in-out 0.25s;
    }

    @media only screen and (max-width: 52rem) {
      padding: 0.8rem;
    }
  `}
`
