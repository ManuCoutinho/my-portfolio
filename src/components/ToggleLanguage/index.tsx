import { Icon } from '@iconify-icon/react'

import * as Styled from './styles'

export const ToggleLanguage: React.FC = () => {
	return (
		<Styled.Switch>
			<Icon icon='ph:globe-light' />
		</Styled.Switch>
	)
}
