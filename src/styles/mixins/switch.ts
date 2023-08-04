import styled, { css } from 'styled-components'

export const SwitchBase = styled.button`
	${({ theme }) => css`
		border: 0;
		color: ${theme.colors.primary};
		font-size: ${theme.fontSize.xl};
		background: transparent;
		width: 100%;
		transition: filter 200ms ease-in-out;

		&:hover {
			transition: filter 200ms ease-in-out;
			transform: scale(1.2);
			filter: drop-shadow(-5px 2px 3px ${theme.colors.highlight});
		}

		&:is(:focus, :focus-within) {
			color: ${theme.colors.active};
			outline: transparent;
		}
	`}
`
