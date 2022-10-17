import * as Styled from './styles'
import { ContainerProps } from './types'

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Styled.Container data-testid='container'>{children}</Styled.Container>
}
