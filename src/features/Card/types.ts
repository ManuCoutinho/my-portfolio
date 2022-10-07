import { ModalCoverProps } from 'features/ModalCover/types'

export interface DataProps extends ModalCoverProps {
  description: string
  site: string
  repo: string
  styles: string
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
