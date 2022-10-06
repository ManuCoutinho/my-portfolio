import styled, { css } from 'styled-components'
import { StackBoxStyleProps } from './types'

export const Container = styled.div<StackBoxStyleProps>`
  ${({ ...props }) => css`
    width: ${props.center ? '100vw' : props.size ? props.size : '100%'};
    height: ${props.center ? '100vh' : 'auto'};
    display: ${props.center ? 'grid' : 'flex'};
    flex-direction: ${props.direction};
    place-content: ${props.center && 'center'};
    align-items: ${props.align || 'flex-start'};
    justify-content: ${props.justify};
    gap: ${`${props.gap}rem`};
    margin-top: ${props.mt};
    margin-bottom: ${props.mb};
    margin: ${props.my} ${props.mx};
    padding-top: ${props.pt};
    padding-bottom: ${props.pb};
    padding: ${props.py} ${props.px};
    transition: ${props.theme.transition};
  `}
`
