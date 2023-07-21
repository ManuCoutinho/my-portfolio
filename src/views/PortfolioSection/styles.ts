import styled, { css } from 'styled-components'

export const PortfolioSection = styled.section`
  margin: 5rem auto;
`

export const Grid = styled.div`
  max-width: clamp(80vw 1180px 100%);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  margin: auto;
  justify-content: center;
  grid-gap: 5rem;
  column-gap: 3rem;
  padding: 1.6rem;
`

export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
`

export const LoadButton = styled.button`
  ${({ theme }) => css`
    width: 10rem;
    background: ${theme.colors.bg_modal};
    border: 2px solid ${theme.colors.glass};
    border-radius: ${theme.radius.small};
    color: ${theme.colors.text};
    margin-top: 0.5rem;
    padding: 0.5rem;
    outline: 0;
    transition: ${theme.transition};
    display: block;

    box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);
    &:hover {
      background: none;
      border: 2px solid ${theme.colors.active};
      transition: ${theme.transition};
    }
  `}
`
