import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { ToggleProps } from './types'

import { BsSunFill, BsMoonStars } from 'react-icons/bs'
import { SwitchThemeContext } from '../Contexts/SwitchThemeContext'

export const ToggleTheme: React.FC<ToggleProps> = ({ toggleTheme }) => {
  const { theme} = useContext(SwitchThemeContext)

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'light'}
      onColor={theme.colors.secondary}
      offColor={theme.colors.carousel_1}
      offHandleColor={theme.colors.info}
      onHandleColor={theme.colors.white}
      draggable
      aria-checked
      aria-label='Toggle theme'
      aria-describedby='switch theme'
      height={28}
      width={60}
      handleDiameter={30}
      uncheckedIcon={
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 15,
            paddingRight: 2,
            color: `${theme.colors.white}`
          }}
        >
          <BsSunFill />
        </span>
      }
      checkedIcon={
        <span
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
            fontSize: 15,
            paddingRight: 2,
            paddingBottom: 2,
            color: `${theme.colors.white}`
          }}
        >
          <BsMoonStars />
        </span>
      }
    />
  )
}
