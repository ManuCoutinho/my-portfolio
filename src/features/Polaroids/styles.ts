import styled, { css } from 'styled-components'
import { Trigger } from '@radix-ui/react-dialog'
import { Container } from 'components/StackBox/styles'
import {
	slideInAnimation,
	slideInBottomAnimation,
	slideInRightAnimation
} from 'styles/mixins/animations'

export const Wrapper = styled(Container)`
	box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
		hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
	filter: sepia(0.5);
	opacity: 1;
	transition: opacity 0.2s linear;

	&[data-state='inactive'] {
		opacity: 0;
		transition: opacity 0.2s linear;
	}

	&[data-state='active'] {
		&:nth-child(odd) {
			${slideInAnimation}
			@media only screen and (max-width: 67.5em) {
				${slideInBottomAnimation}
			}
		}

		&:nth-child(even) {
			${slideInRightAnimation}
			@media only screen and (max-width: 67.5em) {
				${slideInBottomAnimation}
			}
		}
	}
`
export const Polaroid = styled(Trigger)`
	${({ theme }) => css`
		max-height: 333px;
		height: 100%;
		width: 100%;
		padding: 1.25rem;
		padding-bottom: 0;
		display: flex;
		flex-direction: column;
		border: 0;
		transition: ${theme.transition};
		position: relative;
		overflow: hidden;
		background: #e1dddd;
	`}
`

export const Picture = styled.div`
	margin: 0 auto;
	picture,
	img {
		width: 100%;
		height: auto;
		object-fit: cover;
		transition: transform 0.2s ease-in-out;
		display: block;
		min-height: 290px;
	}
`
export const Label = styled.div`
	${({ theme }) => css`
		width: 100%;
		background-color: #e1dddd;
		text-align: center;
		& h3 {
			font-weight: ${theme.fontWeight.light};
			font-family: ${theme.font.cursive};
			color: ${theme.colors.info};
			&:first-letter {
				text-transform: uppercase;
			}
		}
	`}
`
