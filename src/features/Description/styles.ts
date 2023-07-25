import styled, { css } from 'styled-components'
import { Container } from 'components/StackBox/styles'
import {
	slideInAnimation,
	slideInBottomAnimation,
	trackingOutText
} from 'styles/mixins/animations'

export const Wrapper = styled(Container)`
	${() => css`
		opacity: 1;
		transition: opacity 0.2s linear;

		&[data-state='inactive'] {
			p {
				opacity: 0;
				transition: opacity 0.2s linear;
			}
			h3 {
				${trackingOutText};
			}
		}
		&[data-state='active'] {
			p {
				${slideInAnimation};
			}

			@media only screen and (max-width: 67.5em) {
				${slideInBottomAnimation};
			}
		}
	`}
`
