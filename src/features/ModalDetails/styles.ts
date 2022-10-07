import styled, { css } from 'styled-components'

export const BoxDetails = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding: 0.8rem;
    gap: 1rem;
    border-radius: ${theme.radius.small};
    box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);
    transition: ${theme.transition};

    a {
      font-size: ${theme.fontSize.xl};
      padding: 0.5rem;
      &:hover {
        color: ${theme.colors.highlight};
        transition: ${theme.transition};
      }
    }

    @media only screen and (max-width: 80em) {
      padding: 0.5rem;
      margin-bottom: 0.7rem;
    }
  `}
`
export const Topic = styled.span`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.semibold};
    font-family: ${theme.font.title};
    color: ${theme.colors.info};
    font-size: ${theme.fontSize.lg};
  `}
`
