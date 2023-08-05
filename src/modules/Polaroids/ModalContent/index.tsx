import dynamic from 'next/dynamic'
import * as Tabs from '@radix-ui/react-tabs'

import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'

import * as Styled from './styles'
import { DataType } from 'models/data.model'

const Details = dynamic(() => import('./CardContentDetails'))
const Slider = dynamic(() => import('components/Slider'))

export const CardContent: React.FC<DataType> = ({ ...props }) => {
	return (
		<Tabs.Root defaultValue='overview'>
			<Styled.Header>
				<Heading as='h4' size='small'>
					{props.name}
				</Heading>
				<Tabs.List>
					<StackBox justify='space-evenly' gap={2}>
						<Styled.TabTitle value='overview'>Visão geral</Styled.TabTitle>
						<Styled.TabTitle value='details'>Detalhes</Styled.TabTitle>
					</StackBox>
				</Tabs.List>
			</Styled.Header>
			<Styled.Content value='overview'>
				<StackBox id='overview' direction='column'>
					<Slider img={props.img} />
				</StackBox>
			</Styled.Content>
			<Styled.Content value='details'>
				<Details {...props} />
			</Styled.Content>
		</Tabs.Root>
	)
}
