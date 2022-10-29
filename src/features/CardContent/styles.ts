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
      padding: 1rem;
      margin-left: 1rem;
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
    font-size: 1.25rem;
    transition: ${theme.transition};
    &[data-state='active'] {
      color: ${theme.colors.active};
    }
    &:hover {
      transform: scale(1.03);
      transition: ${theme.transition};
    }
  `}
`
export const Content = styled(Tabs.Content)`
  ${() => css`
    outline: 0;
    overflow: hidden;
  `}
`
