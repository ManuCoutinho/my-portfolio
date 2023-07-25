import { IconName } from '@models/icons'

export interface SocialLinksProps extends StyleProps {
	showToggle?: boolean
	hideIcon?: IconName[]
}
export type StyleProps = {
	direction?: 'column' | 'row'
}
