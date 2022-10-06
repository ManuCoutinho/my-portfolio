import styled, { css } from 'styled-components'

export const Nav = styled.nav`
  ${({ theme }) => css`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: relative;
    transition: ${theme.transition};

    margin: 0 auto;
    max-width: 1100px;
    padding: 0 2.5rem;
    width: 100%;

    @media (max-width: 52em) {
      margin-bottom: 1rem;
    }
  `}
`
