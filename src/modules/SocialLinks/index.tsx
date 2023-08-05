import Link from 'next/link'
import { Icon } from '@iconify-icon/react'
import { v4 as uuidv4 } from 'uuid'

import { filterLinks } from 'helpers/filterLinks'

import { SocialLinksProps } from './types'
import { Container, SocialLink } from './styles'

export const SocialLinks: React.FC<SocialLinksProps> = ({
	direction = 'column',
	showToggle = false,
	hideIcon
}) => {
	const links = filterLinks(hideIcon)

	return (
		<Container
			direction={direction}
			role='group'
			aria-label='social links'
			data-state={showToggle ? 'primary' : 'secondary'}
		>
			{links?.map(({ url, name, icon }) => (
				<Link href={url} key={uuidv4()} passHref>
					<SocialLink
						rel='noopener noreferrer'
						target='_blank'
						aria-label={`Acessar ${name}`}
						title={name}
					>
						<Icon icon={icon} />
					</SocialLink>
				</Link>
			))}
		</Container>
	)
}
