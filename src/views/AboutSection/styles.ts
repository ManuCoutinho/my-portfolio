import styled, { css } from 'styled-components'
import {
	fadeInAnimation,
	slideInBottomAnimation
} from 'styles/mixins/animations'
import { Section as SectionBase } from 'styles/mixins/layout'

export const Section = SectionBase

export const Container = styled.div`
	${() => css`
		@media only screen and (max-width: 48em) {
			flex-direction: column;
			gap: 2rem;
			align-items: center;
		}
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		margin: 4rem 0;
	`}
`

export const WrapperImg = styled.div`
	${() => css`
		width: 100%;
		display: grid;
		place-content: center;
		opacity: 1;
		transition: opacity 0.2s linear;

		&[data-state='inactive'] {
			opacity: 0;
			transition: opacity 0.2s linear;
		}

		&[data-state='active'] {
			${fadeInAnimation};
			@media only screen and (max-width: 67.5em) {
				${slideInBottomAnimation};
			}
		}
		img {
			filter: drop-shadow(0px 2px 1px rgba(0, 0, 0, 0.15));
			filter: contrast(120%);
		}
	`}
`
