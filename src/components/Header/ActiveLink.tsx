import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { useState, useContext, ReactElement, ReactNode } from 'react'
import { ThemeContext } from 'styled-components'
import { NavLink } from './styles'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
}

export const ActiveLink: React.FC<ActiveLinkProps> = ({
  children,
  ...rest
}) => {
  const { asPath } = useRouter()
  const { colors } = useContext(ThemeContext)
  const [color, setColor] = useState('')

  return (
    <Link {...rest} passHref>
      <NavLink color={color}>{children}</NavLink>
    </Link>
  )
}
