import { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { SwitchThemeContext } from '../../contexts/SwitchThemeContext'

import { WiDaySunny } from 'react-icons/wi'
import { FiMoon } from 'react-icons/fi'

type Props = {
  toggleTheme(): void
}
export const ToggleTheme: React.FC<Props> = ({ toggleTheme }) => {
  const theme = useContext(ThemeContext)

  return (
    <Switch
      onChange={toggleTheme}
      checked={theme.title === 'light'}
      onColor={theme.colors.primary}
      offColor={theme.colors.primary}
      offHandleColor={theme.colors.text}
      onHandleColor={theme.colors.text}
      height={20}
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
            paddingRight: 2
          }}
        >
          <WiDaySunny />
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
            paddingBottom: 2
          }}
        >
          <FiMoon />
        </span>
      }
    />
  )
}
