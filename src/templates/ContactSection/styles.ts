import styled from 'styled-components'
import { Section } from 'styles/mixins/layout'

export const ContactSection = styled(Section)`
	min-height: 80dvh;
`

export const Container = styled.div`
	width: 100%;
	display: flex;
	gap: 3.5rem;
	align-items: center;
	justify-content: center;
	margin-top: 5rem;

	@media only screen and (max-width: 70em) {
		flex-direction: column-reverse;
		padding: 0 2rem;
		p {
			text-align: center;
			padding: 0 2.5rem;
		}
	}
`

export const BoxAnimation = styled.div`
	max-width: 400px;
`
