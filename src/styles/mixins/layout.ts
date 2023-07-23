import styled, { css } from 'styled-components'

export const Section = styled.section`
	max-width: 1100px;
	width: 100%;
	min-height: 100dvh;
	margin: 0 auto;
	position: relative;
	display: block;
	padding-top: 6.5rem;
`

export const MobileContainer = styled.main`
	${({ theme }) => css`
		min-width: 100dvw;
		min-height: 100dvh;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding-top: 1rem;
		background: ${theme.colors.background};
	`}
`
