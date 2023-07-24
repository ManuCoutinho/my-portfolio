import styled, { css } from 'styled-components'

export const BoxDetails = styled.div`
	${({ theme }) => css`
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: baseline;
		justify-self: stretch;
		flex-wrap: nowrap;
		padding: 0.5rem 0.8rem;
		gap: 1rem;
		border-radius: ${theme.radius.sm};
		box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.15);
		transition: color 0.3s ease-in-out;
		&:last-of-type {
			align-items: center;
		}
		@media only screen and (max-width: 80em) {
			padding: 0.85rem;
		}
	`}
`
export const Topic = styled.dt`
	${({ theme }) => css`
		font-weight: ${theme.fontWeight.semibold};
		font-family: ${theme.font.regular};
		color: ${theme.colors.info};
		font-size: ${theme.fontSize.lg};
		white-space: pre;
		@media only screen and (max-width: 80em) {
			white-space: pre-wrap;
			font-size: 1.2rem;
			width: 15ch;
		}
	`}
`
export const IconLink = styled.a`
	${({ theme }) => css`
		font-size: ${theme.fontSize.lg};
		padding: 0.5rem;
		&:hover {
			color: ${theme.colors.active};
			transition: color 0.3s ease-in-out;
		}
	`}
`
