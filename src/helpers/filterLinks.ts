import { LinkType, IconName } from '@models/icons'
import links from 'constants/links'

export function filterLinks(icon: IconName[] | undefined): LinkType {
	const LINKS: LinkType = [...links]
	if (icon !== undefined) {
		for (const name of icon) {
			const iconIndex = LINKS.findIndex((data) => data.name == name)
			LINKS.splice(iconIndex, 1)
		}
	}

	return LINKS
}
