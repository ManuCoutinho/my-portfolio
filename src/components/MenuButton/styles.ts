import styled, { css } from 'styled-components'

export const MenuIcon = styled.button`
  ${({ theme }) => css`
    background: transparent;
    outline: 0;
    border: 0;
    display: none;
    font-size: ${theme.fontSize.xlg};
    color: ${theme.colors.text};

    @media (max-width: 52em) {
      display: flex;
    }
  `}
`
