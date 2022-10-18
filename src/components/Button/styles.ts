import styled, { css } from 'styled-components'

export const Button = styled.button`
  ${({ theme }) => css`
    background: none;
    border: 2px solid ${theme.colors.active};
    border-radius: ${theme.radius.small};
    color: ${theme.colors.primary};
    margin-top: 0.5rem;
    padding: 0.5rem 1.5rem;
    outline: 0;
    transition: ${theme.transition};
    &:hover {
      transition: ${theme.transition};
      color: ${theme.colors.highlight};
      border-color: ${theme.colors.highlight};
    }
  `}
`
