import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { ToggleProps } from './types'

import { BsSunFill, BsMoonStars } from 'react-icons/bs'

export const ToggleTheme: React.FC<ToggleProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext)

  return (
    <Switch
      onChange={toggleTheme}
      checked={title === 'light'}
      onColor={colors.secondary}
      offColor={colors.carousel_1}
      offHandleColor={colors.info}
      onHandleColor={colors.white}
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
            color: `${colors.white}`
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
            color: `${colors.white}`
          }}
        >
          <BsMoonStars />
        </span>
      }
    />
  )
}
