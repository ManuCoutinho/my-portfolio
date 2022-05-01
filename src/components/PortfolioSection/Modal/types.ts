export interface PropsModal extends Props {
  close(): void
}

export interface Props extends CarouselProps {
  description: string
  site: string
  repo: string
  styles: string
  api?: string
  framework?: string
  title: string
  tools?: Array<string>
  coverDefaultLight?: string
  coverDefaultDark?: string
  coverAltLight?: string
  coverAltDark?: string
  alt?: string
}

export type ImgProps = {
  imgPng: string
  imgWebp: string
  alt: string
  id: string
}
export interface CarouselProps {
  img?: ImgProps[]
}
