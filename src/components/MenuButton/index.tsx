import { Icon } from '@iconify-icon/react'
import icons from 'constants/icons'
import * as Styled from './styles'
import { MenuButtonProps } from './types'

export const MenuButton: React.FC<MenuButtonProps> = ({ open, handleOpen }) => {
  let expanded = false
  const activeAria = open ? 'Fechar Menu' : 'Abrir Menu'

  const toggleMenu = (event: MouseEvent) => {
    if (event.type === 'touchstart') {
      event.preventDefault()
    }
    if (event.type === 'clickaway') {
      handleOpen(!open)
    }
    handleOpen(!open)
    expanded = true
  }

  return (
    <Styled.MenuIcon
      aria-expanded={expanded}
      aria-controls='menu'
      aria-haspopup
      aria-label={activeAria}
      aria-labelledby='menu button'
      onClick={() => toggleMenu}
    >
      {!open ? <Icon icon={icons.hamburger} /> : <Icon icon={icons.x} />}
    </Styled.MenuIcon>
  )
}
