import { CardContentCoverProps } from 'features/CardContentCover/types'

export interface DataProps extends CardContentCoverProps {
  description?: string
  site: string
  repo: string
  styles?: string
  api?: string
  framework?: string
  name: string
  tools?: string
  coverDefaultLight?: string
  coverDefaultDark?: string
  coverAltLight?: string
  coverAltDark?: string
  alt?: string
  route?: string
  id: string
}
