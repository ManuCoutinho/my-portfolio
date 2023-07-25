import styled, { css } from 'styled-components'

export const MenuList = styled.ul`
	${({ theme }) => css`
		display: flex;
		font-size: ${theme.fontSize.md};
		font-weight: ${theme.fontWeight.semibold};
		list-style: none;
		align-items: center;
		transition: ${theme.transition};

		@media (max-width: 52em) {
			flex-direction: column;
			align-items: center;
			gap: 2rem;
			overflow: hidden;
			transition: ${theme.transition};
			width: 100%;
			margin-top: 0;
			height: 0;
			&[data-state='opened'] {
				margin-top: 5rem;
				height: 100dvh;
			}
		}
	`}
`
export const MenuItem = styled.li`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		&[data-state='selected'] {
			text-shadow: ${` 0 2px 3px ${theme.colors.primary}`};
			text-decoration: underline;
			text-decoration-style: dashed;
			text-decoration-thickness: 3px;
			text-underline-offset: 5px;
			padding-inline-start: 2px;
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
