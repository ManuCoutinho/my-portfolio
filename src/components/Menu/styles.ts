import styled, { css } from 'styled-components'

export const MenuList = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		align-items: flex-start;
		margin-left: 3.5rem;

		font-size: ${theme.fontSize.md};
		font-weight: ${theme.fontWeight.semibold};
		list-style: none;
		margin-top: 7rem;

		@media (max-width: 52em) {
			align-items: center;
		}
	`}
`
export const MenuItem = styled.li`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		&[data-state='selected'] {
			text-shadow: ${` 0 2px 3px ${theme.colors.primary}`};
		}
		&:first-of-type {
			padding-top: 2rem;
		}
	`}
`

export const NavLink = styled.a`
	${({ theme }) => css`
		padding: 2rem;
		transition: color ease-in-out 0.25s;
		font-size: 1.15rem;

		&:hover {
			color: ${theme.colors.primary};
			text-shadow: 0 2px 3px ${theme.colors.highlight};
			transition: color ease-in-out 0.25s;
		}

		@media only screen and (max-width: 52rem) {
			padding: 0.8rem;
		}
	`}
`
