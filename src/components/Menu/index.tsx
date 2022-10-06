import { MouseEvent, useState, FC, Fragment } from 'react'
import Link from 'next/link'
import { List, X } from 'phosphor-react'
import { navItems } from 'constants/navigation'
import * as Styled from './styles'

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  let expanded = false
  const activeAria = isOpen ? 'Fechar Menu' : 'Abrir Menu'
  const toggleMenu = (event: MouseEvent) => {
    if (event.type === 'touchstart') {
      event.preventDefault()
    }
    if (event.type === 'clickaway') {
      setIsOpen(!isOpen)
    }
    setIsOpen(!isOpen)
    expanded = true
  }

  return (
    <Fragment>
      <Styled.MenuIcon
        aria-expanded={expanded}
        aria-controls='menu'
        aria-haspopup
        aria-label={activeAria}
        aria-labelledby='menu button'
        onClick={toggleMenu}
      >
        {!isOpen ? <List size={32} /> : <X size={32} />}
      </Styled.MenuIcon>
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
