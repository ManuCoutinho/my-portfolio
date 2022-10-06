import styled, { css, DefaultTheme } from 'styled-components'
import { HeadingStyleProps } from './types'

const variant = {
  small: (theme: DefaultTheme) => css`
    color: ${theme.colors.info};
    font-family: ${theme.font.text};
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.semibold};
    letter-spacing: -1px;
    line-height: 1.5rem;

    margin: 1rem 0;

    span {
      font-weight: ${theme.fontWeight.normal};
    }
  `,
  big: (theme: DefaultTheme) => css`
    color: ${theme.colors.title};
    font-size: ${theme.fontSize.xl};
    font-weight: ${theme.fontWeight.bold};
    line-height: 1.5rem;
    margin: 1.5rem 0;

    text-align: center;
    text-transform: uppercase;
    text-shadow: -2px -2px 5px ${theme.colors.highlight};
  `
}

export const Wrapper = styled.h2<HeadingStyleProps>`
  ${({ theme, size }) => css`
    padding: 0.5rem;
    ${variant[size](theme)}
  `}
`
