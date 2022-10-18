import { Icon } from '@iconify-icon/react'
import icons from 'constants/icons'
import * as Styled from './styles'
import { MenuButtonProps } from './types'

export const MenuButton: React.FC<MenuButtonProps> = ({ open, handleOpen }) => {
  const expanded = !open ? false : true
  const activeAria = open ? 'Fechar Menu' : 'Abrir Menu'

  return (
    <Styled.MenuIcon
      aria-expanded={expanded}
      aria-controls='menu'
      aria-haspopup
      aria-label={activeAria}
      aria-labelledby='menu button'
      data-testid='button'
      aria-hidden={true}
      onClick={() => handleOpen(!open)}
    >
      {!open ? <Icon icon={icons.hamburger} /> : <Icon icon={icons.x} />}
    </Styled.MenuIcon>
  )
}
