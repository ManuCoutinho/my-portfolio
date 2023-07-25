import styled, { css } from 'styled-components'
import { fadeInAnimation } from 'styles/mixins/animations'

export const Main = styled.main`
	${() => css`
		${fadeInAnimation};
	`}
`
