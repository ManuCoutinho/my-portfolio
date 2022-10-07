import styled, { css } from 'styled-components'

export const CardComponent = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.bg_card};
    max-width: 19rem;
    width: 100%;
    padding: 1rem 1rem 2rem 1rem;
    margin: 0 auto;
    display: flex;
    border: 2px solid ${theme.colors.highlight};
    flex-direction: column;

    border-radius: ${theme.radius.small};
    transition: ${theme.transition};
    position: relative;
    overflow: hidden;

    border-radius: ${({ theme }) => theme.radius.small};
    transition: ${({ theme }) => theme.transition};

    &:hover {
      box-shadow: -1px 1px 5px 1px ${theme.colors.highlight};
    }

    h3:first-letter {
      text-transform: capitalize;
      -webkit-text-shadow: -2px 2px 2px ${theme.colors.white};
    }
  `}
`

export const Image = styled.div`
  height: 17.5rem;

  picture,
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const ModalButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.bg_card};
    border: 1px solid ${theme.colors.bg_modal};
    border-radius: ${theme.radius.small};
    color: ${theme.colors.text};
    margin-top: 0.5rem;
    padding: 0.5rem;
    outline: 0;
    transition: ${theme.transition};

    &:hover {
      background: ${theme.colors.glass};
      border: 1px solid ${theme.colors.glass};
      box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);
      -webkit-box-shadow: 1px 1px 3px 2px rgba(0, 0, 0, 0.15);
      transition: ${theme.transition};
    }
  `}
`
