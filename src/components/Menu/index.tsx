import { useState, FC, Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuButton } from 'components/MenuButton'
import { navItems } from 'constants/navigation'
import * as Styled from './styles'

export const Menu: FC = () => {
	const [isOpen, setIsOpen] = useState(false)
	const { asPath } = useRouter()

	return (
		<Fragment>
			<MenuButton open={isOpen} handleOpen={setIsOpen} />
			<Styled.MenuList
				role='menu'
				aria-label='options'
				data-state={isOpen ? 'opened' : 'close'}
				id='menu'
			>
				{navItems.map(({ url, section }) => (
					<Styled.MenuItem
						data-state={asPath === url ? 'selected' : 'off'}
						key={url}
						role='menuitem'
						aria-owns='menu'
						onClick={() => setIsOpen(false)}
					>
						<Link passHref href={url}>
							<Styled.NavLink>{section}</Styled.NavLink>
						</Link>
					</Styled.MenuItem>
				))}
			</Styled.MenuList>
		</Fragment>
	)
}
