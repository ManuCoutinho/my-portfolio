import styled, { css } from 'styled-components'

export const Header = styled.header`
	width: 100dvw;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	user-select: none;
	z-index: 1001;
	background-color: transparent;
`

export const Nav = styled.nav`
	${({ theme }) => css`
		align-items: center;
		display: flex;
		flex-direction: row;
		flex-wrap: nowrap;
		justify-content: space-between;
		position: relative;
		transition: ${theme.transition};

		margin: 0 auto;
		min-width: 100dvw;
		padding: 1rem 2.5rem;
		width: 100%;

		@media (max-width: 52em) {
			margin-bottom: 1rem;
		}
	`}
`

export const NavList = styled.ul`
	width: 100%;
	list-style: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	gap: 3rem;
	padding: 0 0.5rem;
	position: relative;

	& li:last-child {
		z-index: 1005;
	}

	@media (max-width: 52em) {
		gap: 0.5rem;
	}
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

		@media only screen and (max-width: 27em) {
			font-size: 2.5rem;
			padding: 1rem 0;
			font-size: ${theme.fontSize.xl};
			span {
				font-size: ${theme.fontSize.lg};
			}
		}
	`}
`
