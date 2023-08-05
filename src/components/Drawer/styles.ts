import styled, { css } from 'styled-components'

export const Wrapper = styled.aside`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: 2rem;
		overflow: hidden;
		position: absolute;
		right: 0;
		top: 0;
		height: 0;
		padding: 0;
		width: 0;
		transition: width 200ms ease-out;
		z-index: 1002;
		border-left: 1px solid ${theme.colors.accent};

		background-color: ${theme.colors.body};
		background-image: url('/assets/bullet-pattern.png');
		background-position-x: -3.5rem;
		background-repeat: no-repeat;
		box-shadow: hsl(206 22% 7% / 35%) 0px 10px 45px -10px,
			hsl(206 22% 7% / 20%) 0px 10px 30px -15px;

		&[data-state='opened'] {
			width: 25dvw;
			height: 100dvh;
			transition: width 200ms linear;
		}

		@media (max-width: 52em) {
			&[data-state='opened'] {
				width: 100dvw;
				background: ${theme.colors.body};
			}
		}
	`}
`

export const ButtonIcon = styled.button`
	${({ theme }) => css`
		background: transparent;
		border: 0;
		font-size: ${theme.fontSize.xl};
		color: ${theme.colors.primary};

		&:is(:active, :focus) {
			outline: transparent;
			color: ${theme.colors.active};
		}
		@media (max-width: 52em) {
			font-size: ${theme.fontSize.xl};
		}
	`}
`
