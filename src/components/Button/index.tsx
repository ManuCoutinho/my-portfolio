import * as Styled from './styles'
import { ButtonProps } from './types'

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <Styled.Button {...props} />
}
