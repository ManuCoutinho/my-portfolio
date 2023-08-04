import styled, { css } from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const Header = styled.header`
	${({ theme }) => css`
		width: 100%;
		border-bottom: 1px solid ${theme.colors.info};
		margin-bottom: 0.8rem;
		transition: color 0.3s ease-in;
		h4 {
			color: ${theme.colors.text};
			text-transform: uppercase;
			padding: 1rem;
			margin-left: 1rem;
		}
	`}
`

export const TabTitle = styled(Tabs.Trigger)`
	${({ theme }) => css`
		color: ${theme.colors.primary};
		margin-bottom: 0.5rem;
		border: 0;
		background: none;
		font-size: 1.25rem;
		transition: transform, color 0.3s ease-in;

		&[data-state='active'] {
			color: ${theme.colors.active};
			transition: color 0.3s ease-out;
		}
		&:hover {
			transform: scale(1.03);
			transition: transform 0.2s ease-in-out;
		}
	`}
`
export const Content = styled(Tabs.Content)`
	${() => css`
		outline: 0;
		overflow: hidden;
	`}
`
