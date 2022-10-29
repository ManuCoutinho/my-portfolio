export type ContextProps = {
  description: string
  site: string
  repo: string
  styles: string
  api: string | null
  doc: string | null
  framework: string | null
  name: string
  id: string
  coverDefaultLight: string
  coverDefaultDark: string
  coverAltLight: string
  coverAltDark: string
  alt: string
  route: string
  tools?: ToolsContextProps
  img: ImgProps[]
}

export interface IDataContext {
  data: ContextProps[]
}

export type ToolsContextProps = Array<string>

export type ImgProps = {
  imgPng: string
  imgWebp: string
  alt: string
  id: string
}
