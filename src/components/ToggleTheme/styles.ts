import styled, { css } from 'styled-components'

export const Switch = styled.button`
  ${({ theme }) => css`
    border: 0;
    outline: 0;
    vertical-align: middle;
    color: ${theme.colors.secondary};
    font-size: 2rem;
    background: transparent;
    margin: 0.5rem;
    &:hover {
      transition: ${({ theme }) => theme.transition};
      transform: scale(1.2);

      filter: drop-shadow(
        -5px 2px 3px ${({ theme }) => theme.colors.highlight}
      );
    }
  `}
`
