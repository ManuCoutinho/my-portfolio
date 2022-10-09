import dynamic from 'next/dynamic'
import * as Tabs from '@radix-ui/react-tabs'
import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'
import * as Styled from './styles'
import { CardContentProps } from './types'

const Overview = dynamic(() => import('features/CardContentCover'))
const Details = dynamic(() => import('features/CardContentDetails'))

export const CardContent: React.FC<CardContentProps> = ({ ...props }) => {
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
        <Overview img={props.img} />
      </Styled.Content>
      <Styled.Content value='details'>
        <Details {...props} />
      </Styled.Content>
    </Tabs.Root>
  )
}
