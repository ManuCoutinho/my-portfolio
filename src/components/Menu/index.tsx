import { useState, FC, Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MenuButton } from 'components/MenuButton'
import { navItems } from 'constants/navigation'
import * as Styled from './styles'

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <Fragment>
      <MenuButton open={isOpen} handleOpen={setIsOpen} />
      <Styled.MenuList
        role='menu'
        aria-label='options'
        active={isOpen}
        id='menu'
        aria-controls=''
      >
        {navItems.map(({ url, section }) => (
          <Styled.MenuItem
            active={router.asPath === url ? true : false}
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
