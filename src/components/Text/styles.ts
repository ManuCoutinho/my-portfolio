import styled, { css } from 'styled-components'
import { TextStyleProps } from './types'

export const Text = styled.p<TextStyleProps>`
  ${({ theme, align }) => css`
    user-select: none;
    line-height: 1.5rem;
    font-size: 1.25rem;
    font-weight: ${theme.fontWeight.normal};
    color: ${theme.colors.text};
    word-wrap: break-word;
    white-space: pre-line;
    padding: 0.5rem;
    text-align: ${align || 'left'};

    @media only screen and (max-width: 27em) {
      line-height: 1.85rem;
      font-size: ${theme.fontSize.sm};
    }
  `}
`
