import styled, { css } from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    border-bottom: 1px solid ${theme.colors.info};
    margin-bottom: 0.8rem;
    transition: ${theme.transition};
    h4 {
      color: ${theme.colors.text};
      text-transform: uppercase;
    }
  `}
`

export const TabTitle = styled(Tabs.Trigger)`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    margin-bottom: 0.5rem;
    outline: 0;
    border: 0;
    background: none;
    font-size: ${theme.fontSize.md};

    &:hover {
      color: ${theme.colors.secondary};
      transition: ${theme.transition};
    }

    &[data-state='active'] {
      color: ${theme.colors.highlight};
    }
  `}
`
