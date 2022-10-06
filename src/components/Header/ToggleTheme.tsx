import { useContext, FC } from 'react'
import Switch from 'react-switch'
import { useTheme } from 'styled-components'
import { BsSunFill, BsMoonStars } from 'react-icons/bs'
import { ThemeContext } from '../../contexts/ThemeContext'

export const ToggleTheme: FC = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const theme = useTheme()
  const handleChangeTheme = () => {
    toggleTheme({ type: theme.title === 'light' ? 'dark' : 'light' })
  }
  return (
    <Switch
      onChange={handleChangeTheme}
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
