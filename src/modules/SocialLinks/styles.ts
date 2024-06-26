import styled, { css } from 'styled-components'
import { StyleProps } from './types'

const display = {
	column: () => css`
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
	`,
	row: () => css`
		flex-direction: row;
		align-items: center;
		justify-content: center;
	`
}
export const Container = styled.nav<StyleProps>`
	${({ theme, direction }) => css`
		color: ${theme.colors.primary};
		transition: ${theme.transition};
		display: flex;
		${display[direction ?? 'column']};
		gap: 0.75rem;
		align-items: center;
		&[data-state='primary'] {
			position: fixed;
			right: 2%;
			z-index: 1003;
			@media (max-width: 27em) {
				position: relative;
				display: flex;
				flex-flow: row nowrap;
			}
		}
	`}
`
export const SocialLink = styled.a`
	${({ theme }) => css`
		font-size: ${theme.fontSize.xl};

		&:hover {
			transition: ${theme.transition};
			transform: scale(1.2);
			filter: drop-shadow(-5px 2px 3px ${theme.colors.highlight});
		}
		&:is(:focus, :focus-within) {
			color: ${theme.colors.active};
			outline: transparent;
		}
	`}
`
