import { IconName } from 'models/icons.model'

export interface SocialLinksProps extends StyleProps {
	showToggle?: boolean
	hideIcon?: IconName[]
}
export type StyleProps = {
	direction?: 'column' | 'row'
}
