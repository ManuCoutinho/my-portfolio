import styled, { css } from 'styled-components'
import { Section } from 'styles/mixins/layout'

export const Container = styled.div`
	width: 100%;
	height: calc(100vh + 7rem);
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 1.5rem;

	@media only screen and (max-width: 52em) {
		height: calc(100vh + 5rem);
	}

	@media only screen and (max-width: 27em) {
		height: calc(100vh + 6rem);
		flex-direction: column;
		gap: 0.5rem;
	}
`
export const Wrapper = styled(Section)`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
	padding-top: 0;

	@media only screen and (max-width: 50em) {
		display: flex;
		margin-top: 0;
		flex-direction: column-reverse;
		min-height: fit-content;
	}
`
export const BoxCenter = styled.div`
	${({ theme }) => css`
		@media only screen and (min-width: 80em) {
			padding: 2rem 1rem;
		}

		@media only screen and (max-width: 50em) {
			font-size: ${theme.fontSize.xl};
			gap: 1rem;
			padding: 1rem 0;

			&:last-child {
				width: 300px;
			}
		}

		@media only screen and (max-width: 27em) {
			gap: 0.5rem;
			padding: 0;
			margin-bottom: 1rem;
			align-items: center;
		}

		font-family: ${theme.font.regular};
		font-weight: ${theme.fontWeight.bold};
		font-size: ${theme.fontSize.xlg};
		line-height: 2.5rem;
		width: 100%;
		display: flex;
		flex-flow: column wrap;
		gap: 2rem;
	`}
`

export const BoxLottie = styled.div`
	${() => css`
		min-width: 380px;

		@media only screen and (max-width: 50em) {
			min-width: 100px;
			width: 27rem;
			display: grid;
			place-content: center;
		}
		@media only screen and (max-width: 27em) {
			max-width: 16rem;
			display: grid;
			place-content: center;
		}
	`}
`
