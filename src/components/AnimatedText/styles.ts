import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
	${({ theme }) => css`
		text-align: center;
		align-self: center;

		width: 100%;
		p {
			margin-bottom: 0.5em;
			font-weight: ${theme.fontWeight.semibold};
		}
		span {
			text-transform: uppercase;
			color: ${theme.colors.primary};
		}
		@media only screen and (max-width: 50em) {
			margin-bottom: 1rem;
		}
	`}
`
