import styled, { css } from 'styled-components'

export const Logo = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.fontSize.xlg};
    font-weight: ${theme.fontWeight.bold};
    letter-spacing: -3px;
    text-shadow: -2px -1px 3px ${theme.colors.highlight};
    padding: 2rem 0;
    transition: ${theme.transition};
    span {
      font-size: ${theme.fontSize.xl};
      font-family: ${theme.font.text};
      font-weight: ${theme.fontWeight.light};
    }

    &:hover {
      transition: ${theme.transition};
      text-shadow: 4px 2px 3px ${theme.colors.highlight};
    }
  `}
`
