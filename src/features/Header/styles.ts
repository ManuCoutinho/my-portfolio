import styled, { css } from 'styled-components'

export const Container = styled.header`
	${({ theme }) => css`
		border-bottom: 1px solid ${theme.colors.primary};
		width: 100vw;
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		user-select: none;
		z-index: 999;

		background: ${theme.colors.glass};
		box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
		backdrop-filter: blur(30px) saturate(100%);
	`}
`
