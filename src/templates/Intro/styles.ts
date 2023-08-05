import styled, { css } from 'styled-components'
import { fadeOutPage, trackingInTitle } from 'styles/mixins/animations'

export const Container = styled.main`
	${() => css`
		position: relative;
		width: 100dvw;
		height: 100dvh;
		display: flex;
		justify-content: center;
		align-items: center;
		${fadeOutPage};
	`}
`
export const Video = styled.video`
	${() => css`
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		aspect-ratio: 16:9;
		object-fit: cover;
		z-index: 1;
	`}
`
export const Greetings = styled.div`
	${() => css`
		z-index: 2;
		${trackingInTitle};

		h1 {
			color: rgb(201, 100, 81);
			font-size: 5rem;

			@media only screen and (max-width: 27em) {
				font-size: 3.5rem;
			}
		}
	`}
`
