import styled, { css } from 'styled-components'

export const Nav = styled.nav`
	${({ theme }) => css`
		align-items: center;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		position: relative;
		transition: ${theme.transition};

		margin: 0 auto;
		max-width: 1100px;
		padding: 0 2.5rem;
		width: 100%;

		@media (max-width: 52em) {
			margin-bottom: 1rem;
		}
	`}
`
export const Logo = styled.h1`
	${({ theme }) => css`
		font-size: ${theme.fontSize.xlg};
		color: ${theme.colors.primary};
		font-weight: ${theme.fontWeight.bold};
		letter-spacing: -3px;
		text-shadow: 4px 2px 3px ${theme.colors.highlight};
		padding: 2rem 0;
		span {
			font-size: 2.5rem;
			font-family: ${theme.font.cursive};
			font-weight: ${theme.fontWeight.regular};
		}

		@media only screen and (max-width: 25em) {
			font-size: 2.5rem;
			padding: 1rem 0;
			span {
				font-size: ${theme.fontSize.xl};
			}
		}
	`}
`
