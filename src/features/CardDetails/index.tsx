import dynamic from 'next/dynamic'
import * as Tabs from '@radix-ui/react-tabs'
import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'
import * as Styled from './styles'
import { CarDetailsProps } from './types'

const Overview = dynamic(() => import('features/ModalCover'))
const Details = dynamic(() => import('features/ModalDetails'))

export const CardDetails: React.FC<CarDetailsProps> = ({ ...props }) => {
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
      <Tabs.Content value='overview'>
        <Overview img={props.img} />
      </Tabs.Content>
      <Tabs.Content value='details'>
        <Details {...props} />
      </Tabs.Content>
    </Tabs.Root>
  )
}
