import * as Styled from './styles'
import { TextProps } from './types'

export const Text: React.FC<TextProps> = ({ children, align }) => {
  return <Styled.Text align={align}>{children}</Styled.Text>
}
