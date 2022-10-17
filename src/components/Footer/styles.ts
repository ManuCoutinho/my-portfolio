import styled, { css } from 'styled-components'

export const FooterContainer = styled.footer<{ bgPage?: boolean }>`
  ${({ theme, bgPage }) => css`
    background: ${theme.colors.body};
    color: ${theme.colors.text};
    font-size: ${theme.fontSize.md};
    margin: 0 auto;
    padding: 2rem 1rem;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    span {
      font-family: ${theme.font.title};
      font-weight: ${theme.fontWeight.semibold};
      color: ${theme.colors.secondary};
      font-size: ${theme.fontSize.md};
      border-bottom: 1px solid ${theme.colors.highlight};
    }

    @media (max-width: 48em) {
      flex-direction: column;
      font-size: ${theme.fontSize.sm};
      gap: 0.5rem;
      background: ${bgPage && theme.colors.bg_modal};
    }
  `}
`
