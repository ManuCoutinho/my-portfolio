export interface TextStyleProps {
  align?: string
  as?: 'p' | 'dd' | 'dt' | 'span' | 'cite' | 'blockquote' | 'code' | 'kbd'
}

export interface TextProps extends TextStyleProps {
  children: React.ReactNode
}
