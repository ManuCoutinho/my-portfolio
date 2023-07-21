import styled, { css } from 'styled-components'

export const Switch = styled.button`
  ${({ theme }) => css`
    border: 0;
    outline: 0;
    color: ${theme.colors.primary};
    font-size: ${theme.fontSize.xl};

    background: transparent;
    width: 100%;
    &:hover {
      transition: ${({ theme }) => theme.transition};
      transform: scale(1.2);

      filter: drop-shadow(
        -5px 2px 3px ${({ theme }) => theme.colors.highlight}
      );
    }
  `}
`
