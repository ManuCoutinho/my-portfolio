import styled, { DefaultTheme, css } from 'styled-components'
import { transparentize } from 'polished'
import { ButtonStyleProps } from './types'

const variants = {
	filled: (theme: DefaultTheme) => css`
		background: ${theme.colors.info};
		color: ${theme.colors.white};
		border: 1px solid ${theme.colors.info};
		box-shadow: hsl(206 22% 7% / 35%) 0px 10px 15px -10px,
			hsl(206 22% 7% / 20%) 0px 10px 10px -15px;

		&:hover {
			background-color: ${theme.colors.secondary};
			transition: background 0.3ms ease-in-out;
		}
	`,
	outline: (theme: DefaultTheme) => css`
		border: 2px solid ${theme.colors.primary};
		color: ${theme.colors.primary};
		&:hover {
			background-color: ${theme.colors.primary};
			color: ${theme.colors.white};
			transition: color 300ms ease-in-out;
		}
	`,
	ghost: (theme: DefaultTheme) => css`
		border: 0;
		background: ${transparentize(0.9, theme.colors.primary)};

		&:hover {
			background: ${transparentize(0.5, theme.colors.primary)};
			color: ${theme.colors.white};
			transition: background 300ms ease-in-out;
			font-weight: ${theme.fontWeight.semibold};
		}
	`
}

const buttonSize = {
	sm: (theme: DefaultTheme) => css`
		padding: 0.5rem;
		font-size: ${theme.fontSize.sm};
		line-height: 1.25rem;
		max-width: 9rem;
	`,
	md: (theme: DefaultTheme) => css`
		padding: 0.5rem 1.5rem;
		font-size: ${theme.fontSize.md};
		line-height: 2rem;
		max-width: 12rem;
	`,
	full: (theme: DefaultTheme) => css`
		padding: 0.5rem 2rem;
		font-size: ${theme.fontSize.wd};
		font-weight: ${theme.fontWeight.regular};
		line-height: 2.5rem;

		@media only screen and (max-width: 25em) {
			padding: 0.5rem 1.3rem;
			font-size: ${theme.fontSize.md};
		}
	`
}

export const Button = styled.button<ButtonStyleProps>`
	${({ theme, variant, size }) => css`
		outline: 0;
		background: none;
		width: 100%;
		border-radius: ${theme.radius.sm};
		${variant ? variants[variant](theme) : variants['filled'](theme)};
		${size ? buttonSize[size](theme) : buttonSize['md'](theme)};
		transition: color, background 300ms ease-in-out;

		&:is(:focus, :active, :focus-within) {
			outline-offset: 1px;
			outline: 1px solid ${theme.colors.primary};
			border: 1px solid inherit;
			box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
				hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
		}
	`}
`
