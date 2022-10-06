export type ContextProps = {
  description: string
  site: string
  repo: string
  styles: string
  api: string
  framework: string
  name: string
  id: string
  coverDefaultLight: string
  coverDefaultDark: string
  coverAltLight: string
  coverAltDark: string
  alt: string
  route: string
  tools?: string
  img: ImgProps[]
}

export interface IDataContext {
  data: ContextProps[]
}

export type ToolsContextProps = {
  tools: Array<string>
}

export type ImgProps = {
  imgPng: string
  imgWebp: string
  alt: string
  id: string
}
