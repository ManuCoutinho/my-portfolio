import Link from 'next/link'
import { MenuList, MenuItem } from './styles'

export const Menu: React.FC = () => {
  const items = [
    { section: 'Home', url: '#home' },
    { section: 'Sobre', url: '#about' },
    { section: 'Portfólio', url: '#portfolio' },
    { section: 'Contato', url: '#contact' },
  ]
  return (
    <MenuList role='menu' aria-label='options'>
      {items.map((item) => (
        <Link href={item.url} key={item.url} passHref>
          <a role='menuItem'>
            <MenuItem>{item.section}</MenuItem>
          </a>
        </Link>
      ))}
    </MenuList>
  )
}
