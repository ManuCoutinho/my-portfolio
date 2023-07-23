import * as Styled from './styles'
import { TextProps } from './types'

export const Text: React.FC<TextProps> = ({ children, align, as }) => {
	return (
		<Styled.Text as={as} align={align}>
			{children}
		</Styled.Text>
	)
}
