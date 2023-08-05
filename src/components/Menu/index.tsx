import { useRouter } from 'next/router'
import Link from 'next/link'

import { navItems } from 'constants/navigation'
import { MenuProps } from './types'

import * as Styled from './styles'

export const Menu: React.FC<MenuProps> = ({ handleState }) => {
	const { asPath } = useRouter()

	return (
		<Styled.MenuList role='menu' aria-label='options' id='menu'>
			{navItems.map(({ url, section }) => (
				<Styled.MenuItem
					data-state={asPath === url ? 'selected' : 'off'}
					key={url}
					role='menuitem'
					aria-owns='menu'
					onClick={() => handleState(false)}
				>
					<Link passHref href={url}>
						<Styled.NavLink>{section}</Styled.NavLink>
					</Link>
				</Styled.MenuItem>
			))}
		</Styled.MenuList>
	)
}
