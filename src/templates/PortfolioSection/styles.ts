import styled from 'styled-components'
import { Section } from 'styles/mixins/layout'

export const PortfolioSection = Section

export const Grid = styled.div`
	max-width: 80dvw;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fit, 300px);
	margin: auto;
	justify-content: center;
	grid-gap: 5rem;
	column-gap: 3rem;
	padding: 1.6rem;
`

export const BoxButtons = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	gap: 2rem;
	margin-top: 0.5rem;
`
