import { ReactNode } from 'react'

import { Item } from './styles'

interface ItemProps {
  children: ReactNode
}

export const CarouselItem = ({ children }: ItemProps) => {
  return <Item>{children}</Item>
}
