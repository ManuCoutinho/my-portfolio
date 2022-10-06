import { FC } from 'react'
import * as Styled from './styles'
import { StackBoxProps } from './types'

export const StackBox: FC<StackBoxProps> = ({ ...props }) => {
  const att = props.as ? props.as : 'div'
  return (
    <Styled.Container
      as={att}
      center={props.center}
      direction={props.direction}
      size={props.size}
      gap={props.gap}
      align={props.align}
      mx={props.mx}
      mt={props.mt}
      mb={props.mb}
      my={props.my}
      justify={props.justify}
      onClick={props.onClick}
      onChange={props.onChange}
      onBlur={props.onBlur}
      px={props.px}
      pt={props.pt}
      pb={props.pb}
      py={props.py}
    >
      {props.children}
    </Styled.Container>
  )
}
