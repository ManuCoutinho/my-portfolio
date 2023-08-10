import styled, { css } from 'styled-components'
import { Icon } from '@iconify-icon/react'

export const Container = styled.div`
	width: 98dvw;
	height: 80vh;
	padding: 2rem;
	margin-top: 1.5rem;
	margin-left: 1.5rem;
	overflow: hidden;

	& h4 {
		margin-left: 3rem;
	}
`

export const Slider = styled.div`
	display: flex;
	width: 100%;
`
export const Wrapper = styled.div`
	cursor: grabbing;
`

export const Content = styled(Icon)`
	${({ theme }) => css`
		border-radius: ${theme.radius.md};
		background: linear-gradient(
			145deg,
			${theme.colors.carousel_1},
			${theme.colors.carousel_2}
		);
		box-shadow: 13px 13px 20px ${theme.colors.carousel_3},
			-13px -13px 20px ${theme.colors.carousel_4};
		color: ${theme.colors.secondary};
		padding: 2rem 0;
		display: grid;
		place-content: center;
		margin: 3.5rem 0;
		max-width: 200px;
		height: 140px;
		width: 100%;

		font-size: ${theme.fontSize.xlg};
		transition: ${theme.transition};
		&:hover {
			transition: ${theme.transition};
			color: ${theme.colors.active};
		}

		@media only screen and (max-width: 77.5em) {
			max-width: 180px;
		}
		@media only screen and (max-width: 61.5em) {
			margin: 2rem 0;
			max-width: 140px;
		}
	`}
`
