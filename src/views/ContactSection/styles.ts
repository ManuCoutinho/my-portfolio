import styled, { css } from 'styled-components'

export const ContactSection = styled.section``

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;

  @media only screen and (max-width: 45em) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }
`

export const BoxAnimation = styled.div`
  max-width: 350px;
`

export const Email = styled.a`
  ${({ theme }) => css`
    font-weight: ${theme.fontWeight.semibold};
    transition: ${theme.transition};

    &:hover {
      transition: ${theme.transition};
      color: ${theme.colors.primary};
      text-decoration: underline;
    }
  `}
`
