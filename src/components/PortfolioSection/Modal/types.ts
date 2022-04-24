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
