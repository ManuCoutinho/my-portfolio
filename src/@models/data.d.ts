export type DataType = {
	description: string
	site: string
	repo: string
	styles: string
	api: string | null
	doc: string | null
	framework: string | null
	name: string
	id: string
	coverDefault: string
	coverAlt: string
	alt: string
	route: string
	tools?: ToolsType
	img: ImgType[]
}

export type ContextType = {
	data: DataType[]
}

export type ToolsType = string[]

export type ImgType = {
	imgPng: string
	imgWebp: string
	alt: string
	id: string
}
