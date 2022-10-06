export interface StackBoxProps extends StackBoxStyleProps {
  children?: React.ReactNode
  as?: 'main' | 'section' | 'form' | 'header' | 'footer' | 'nav' | 'ul' | 'span'
  onClick?: () => void
  onChange?: () => void
  onBlur?: () => void
  onSubmit?: () => void
}

export interface StackBoxStyleProps {
  size?: 'full' | 'screen' | 'half' | 'part' | string
  direction?: 'column' | 'row' | 'column-reverse'
  center?: boolean
  align?: string
  gap?: number
  mt?: string
  mb?: string
  mx?: string
  my?: string
  justify?: string
  pt?: string
  pb?: string
  px?: string
  py?: string
}
