import Link from 'next/link'
import { useRouter } from 'next/router'
import { MouseEvent, useContext, useState } from 'react'
import { ToggleTheme } from './ToggleTheme'
import { ToggleProps } from './types'
import { ThemeContext } from 'styled-components'

import {
  MenuList,
  MenuItem,
  ToggleMenu,
  Hamburger,
  NavLink,
  Close
} from './styles'

export const Menu: React.FC<ToggleProps> = ({ toggleTheme }) => {
  const { asPath } = useRouter()
  const { colors } = useContext(ThemeContext)
  const [color, setColor] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  let expanded = false

  const activeAria = isOpen ? 'Fechar Menu' : 'Abrir Menu'

  const toggleMenu = (event: MouseEvent) => {
    if (event.type === 'touchstart') {
      event.preventDefault()
    }
    setIsOpen(!isOpen)
    expanded = true
  }

  const items = [
    { section: 'Home', url: '/#home' },
    { section: 'Sobre', url: '/#about' },
    { section: 'Portfólio', url: '/#portfolio' },
    { section: 'Contato', url: '/#contact' }
  ]

  return (
    <>
      <ToggleMenu
        aria-expanded={expanded}
        aria-controls='menu'
        aria-haspopup
        aria-label={activeAria}
      >
        {!isOpen ? (
          <Hamburger onClick={toggleMenu} />
        ) : (
          <Close onClick={toggleMenu} />
        )}
      </ToggleMenu>
      <MenuList role='menu' aria-label='options' active={isOpen} id='menu'>
        {items.map((item) => (
          <Link passHref href={item.url} key={item.url}>
            <NavLink color={color}>
              <MenuItem
                role='menu-item'
                onClick={() => {
                  asPath === item.url
                    ? setColor(colors.highlight)
                    : setColor(colors.info)
                }}
              >
                {item.section}
              </MenuItem>
            </NavLink>
          </Link>
        ))}
        <ToggleTheme toggleTheme={toggleTheme} />
      </MenuList>
    </>
  )
}
