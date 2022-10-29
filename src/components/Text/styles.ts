import styled, { css } from 'styled-components'
import { TextStyleProps } from './types'

export const Text = styled.p<TextStyleProps>`
  ${({ theme, align }) => css`
    user-select: none;
    line-height: 1.75rem;
    font-size: 1.1rem;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.text};
    word-wrap: break-word;
    white-space: pre-line;
    word-break: keep-all;
    padding: 0.5rem;
    text-align: ${align || 'left'};

    @media only screen and (max-width: 27em) {
      line-height: 1.85rem;
      font-size: ${theme.fontSize.md};
    }
  `}
`
