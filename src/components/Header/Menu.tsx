import { useState } from 'react'
import { ToggleTheme } from './ToggleTheme'

import { MenuList, MenuItem, ToggleMenu, Hamburger, NavLink } from './styles'

type Props = {
  toggleTheme(): void
}

export const Menu: React.FC<Props> = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false)
  const items = [
    { section: 'Home', url: '#home' },
    { section: 'Sobre', url: '#about' },
    { section: 'Portfólio', url: '#portfolio' },
    { section: 'Contato', url: '#contact' }
  ]
  //todo verificar arias
  return (
    <>
      <ToggleMenu aria-haspopup>
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </ToggleMenu>
      <MenuList role='menu' aria-label='options' active={isOpen}>
        {items.map((item) => (
          <NavLink href={item.url} rel='nofollow' key={item.url}>
            <MenuItem role='menu-item'>{item.section}</MenuItem>
          </NavLink>
        ))}
        <ToggleTheme toggleTheme={toggleTheme} />
      </MenuList>
    </>
  )
}
