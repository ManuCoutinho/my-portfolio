import { LinkInternal } from 'components/Layout/Base'
import styled, { css } from 'styled-components'

export const Item = styled(LinkInternal)`
  ${({ theme }) => css`
  
  &:hover {
    transition: ${theme.transition};
    transform: scale(1.2);
    filter: drop-shadow(-5px 2px 3px ${theme.colors.highlight});
  `}
`
