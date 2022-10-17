import { useState, FC, Fragment } from 'react'
import Link from 'next/link'
import { MenuButton } from 'components/MenuButton'
import { navItems } from 'constants/navigation'
import * as Styled from './styles'

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Fragment>
      <MenuButton open={isOpen} handleOpen={setIsOpen} />
      <Styled.MenuList
        role='menu'
        aria-label='options'
        active={isOpen}
        id='menu'
      >
        {navItems.map((item) => (
          <Styled.MenuItem
            key={item.url}
            role='listitem'
            onClick={() => setIsOpen(false)}
          >
            <Link passHref href={item.url}>
              <Styled.NavLink role='menuitem'>{item.section}</Styled.NavLink>
            </Link>
          </Styled.MenuItem>
        ))}
      </Styled.MenuList>
    </Fragment>
  )
}
