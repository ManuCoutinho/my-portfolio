import Link from 'next/link'
import { Icon } from '@iconify-icon/react'

import { StackBox } from 'components/StackBox'
import { Text } from 'components/Text'

import icons from 'constants/icons'
import { DataType } from '@models/data'
import * as Styled from './styles'

const CardContentDetails: React.FC<DataType> = ({ ...props }) => {
	return (
		<StackBox id='details' direction='column' gap={1} px='1.5rem' as='dl'>
			<Styled.BoxDetails>
				<Styled.Topic aria-label='description'>Descrição: </Styled.Topic>
				<Text as='dd' aria-label={props.description}>
					{props.description}
				</Text>
			</Styled.BoxDetails>
			{props.framework && (
				<Styled.BoxDetails>
					<Styled.Topic aria-label={'Framework'}>Framework: </Styled.Topic>
					<Text as='dd' aria-label={props.framework}>
						{props.framework}
					</Text>
				</Styled.BoxDetails>
			)}
			<Styled.BoxDetails>
				<Styled.Topic aria-label={'tools'}>
					Linguagens e Ferramentas:{' '}
				</Styled.Topic>
				<Text as='dd' aria-label={props.tools}>
					{props.tools?.join(' / ')}
				</Text>
			</Styled.BoxDetails>
			<Styled.BoxDetails>
				<Styled.Topic aria-label={'style'}>Estilização: </Styled.Topic>
				<Text as='dd' aria-label={props.styles}>
					{props.styles}
				</Text>
			</Styled.BoxDetails>
			{props.api && (
				<Styled.BoxDetails>
					<Styled.Topic aria-label={'api'}>API: </Styled.Topic>
					<Text as='dd' aria-label={props.api}>
						{props.api}
					</Text>
				</Styled.BoxDetails>
			)}
			<Styled.BoxDetails>
				<Styled.Topic aria-label={'available'}>Disponível em: </Styled.Topic>
				<Link href={props.repo} passHref>
					<Styled.IconLink
						target='_blank'
						rel='noopener noreferrer'
						title='repositorio no github'
					>
						<Icon icon={icons.github} style={{ fontSize: '1.8rem' }} />
					</Styled.IconLink>
				</Link>
				{props.site != 'Em breve' && (
					<Link href={props.site} passHref>
						<Styled.IconLink
							target='_blank'
							rel='noopener noreferrer'
							title={`acessar o ${props.name}`}
						>
							<Icon icon={icons.link_external} />
						</Styled.IconLink>
					</Link>
				)}
				{props.doc && (
					<Link href={props.doc} passHref>
						<Styled.IconLink
							target='_blank'
							rel='noopener noreferrer'
							title={`documentation for ${props.name}`}
						>
							<Icon icon={icons.docs} />
						</Styled.IconLink>
					</Link>
				)}
			</Styled.BoxDetails>
		</StackBox>
	)
}

export default CardContentDetails
