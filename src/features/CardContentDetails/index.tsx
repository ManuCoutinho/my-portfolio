import Link from 'next/link'
import { Icon } from '@iconify-icon/react'
import { StackBox } from 'components/StackBox'
import { Text } from 'components/Text'
import { DataProps } from 'features/Card/types'
import * as Styled from './styles'
import icons from 'constants/icons'

const CardContentDetails: React.FC<DataProps> = ({ ...props }) => {
  return (
    <StackBox id='details' direction='column' gap={1} px='1.5rem' as='dl'>
      <Styled.BoxDetails>
        <Styled.Topic>Descrição: </Styled.Topic>
        <Text as='dd'>{props.description}</Text>
      </Styled.BoxDetails>
      {!!props.framework && (
        <Styled.BoxDetails>
          <Styled.Topic>Framework: </Styled.Topic>
          <Text as='dd'>{props.framework}</Text>
        </Styled.BoxDetails>
      )}
      <Styled.BoxDetails>
        <Styled.Topic>Linguagens e Ferramentas: </Styled.Topic>
        <Text as='dd'>{props.tools}</Text>
      </Styled.BoxDetails>
      <Styled.BoxDetails>
        <Styled.Topic>Estilização: </Styled.Topic>
        <Text as='dd'>{props.styles}</Text>
      </Styled.BoxDetails>
      {props.api !== '' && (
        <Styled.BoxDetails>
          <Styled.Topic>API: </Styled.Topic>
          <Text as='dd'>{props.api}</Text>
        </Styled.BoxDetails>
      )}
      <Styled.BoxDetails as='dd'>
        <Styled.Topic>Disponível em: </Styled.Topic>
        <Link href={props.repo} passHref>
          <Styled.IconLink
            target='_blank'
            rel='noopener noreferrer'
            role='repositorio no github'
          >
            <Icon icon={icons.github} style={{ fontSize: '2.3rem' }} />
          </Styled.IconLink>
        </Link>
        {props.site != 'Em breve' && (
          <Link href={props.site} passHref>
            <Styled.IconLink
              target='_blank'
              rel='noopener noreferrer'
              role={`acessar o ${props.name}`}
            >
              <Icon icon={icons.link_external} />
            </Styled.IconLink>
          </Link>
        )}
      </Styled.BoxDetails>
    </StackBox>
  )
}

export default CardContentDetails
