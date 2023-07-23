import * as Styled from './styles'
import { HeadingProps } from './types'

export const Heading: React.FC<HeadingProps> = ({ children, as, size }) => {
	return (
		<Styled.Wrapper as={as} size={size}>
			{children}
		</Styled.Wrapper>
	)
}
