import { useContext, FC } from 'react'
import { MoonStars, SunDim } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { ThemeContext } from '../../contexts/ThemeContext'
import * as Styled from './styles'

export const ToggleTheme: FC = () => {
  const { toggleTheme } = useContext(ThemeContext)
  const { title } = useTheme()
  const handleChangeTheme = () => {
    toggleTheme({ type: title === 'light' ? 'dark' : 'light' })
  }
  return (
    <Styled.Switch type='button' onClick={handleChangeTheme} role='switch'>
      {title === 'light' ? (
        <SunDim size={32} weight='light' />
      ) : (
        <MoonStars size={32} weight='light' />
      )}
    </Styled.Switch>
  )
}
