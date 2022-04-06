import Link from 'next/link'
import { useState } from 'react'
import { MenuList, MenuItem, ToggleMenu, Hamburger } from './styles'

export const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const items = [
    { section: 'Home', url: '#home' },
    { section: 'Sobre', url: '#about' },
    { section: 'Portfólio', url: '#portfolio' },
    { section: 'Contato', url: '#contact' },
  ]
  return (
    <>
      <ToggleMenu>
        <Hamburger onClick={() => setIsOpen(!isOpen)} />
      </ToggleMenu>
      <MenuList role='menu' aria-label='options' active={isOpen}>
        {items.map((item) => (
          <Link href={item.url} key={item.url} passHref>
            <a role='menuItem'>
              <MenuItem>{item.section}</MenuItem>
            </a>
          </Link>
        ))}
      </MenuList>
    </>
  )
}
