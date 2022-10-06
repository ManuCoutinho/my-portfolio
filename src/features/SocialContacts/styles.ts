import styled, { css } from 'styled-components'

export const Container = styled.nav<{ direction?: string }>`
  ${({ theme, direction }) => css`
    vertical-align: middle;
    color: ${theme.colors.secondary};
    font-size: 2rem;
    transition: ${theme.transition};
    display: flex;
    flex-direction: ${direction ? direction : 'column'};
    gap: 0.5rem;
    @media (max-width: 27em) {
      display: flex;
      flex-flow: row nowrap;
      font-size: 1.8rem;
      gap: 0.25rem;
    }
  `}
`
