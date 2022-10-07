import Link from 'next/link'
import { StackBox } from 'components/StackBox'
import { Text } from 'components/Text'
import { DataProps } from 'features/Card/types'
import * as Styled from './styles'
import { ArrowSquareOut, GithubLogo } from 'phosphor-react'

const ModalDetails: React.FC<DataProps> = ({ ...props }) => {
  return (
    <StackBox id='details' direction='column' px='2rem'>
      <Styled.BoxDetails>
        <Text>
          <Styled.Topic>Descrição: </Styled.Topic>
          {props.description}
        </Text>
      </Styled.BoxDetails>
      {!!props.framework && (
        <Styled.BoxDetails>
          <Text>
            <Styled.Topic>Framework: </Styled.Topic>
            {props.framework}
          </Text>
        </Styled.BoxDetails>
      )}
      <Styled.BoxDetails>
        <Text>
          <Styled.Topic>Linguagens e Ferramentas: </Styled.Topic>
          {props.tools}
        </Text>
      </Styled.BoxDetails>
      <Styled.BoxDetails>
        <Text>
          <Styled.Topic>Estilização: </Styled.Topic>
          {props.styles}
        </Text>
      </Styled.BoxDetails>
      {props.api !== '' && (
        <Styled.BoxDetails>
          <Text>
            <Styled.Topic>API: </Styled.Topic>
            {props.api}
          </Text>
        </Styled.BoxDetails>
      )}
      <Styled.BoxDetails>
        <Styled.Topic>Disponível em: </Styled.Topic>
        <Link href={props.repo} passHref>
          <a
            target='_blank'
            rel='noopener noreferrer'
            role='repositorio no github'
          >
            <GithubLogo />
          </a>
        </Link>
        {props.site != 'Em breve' && (
          <Link href={props.site} passHref>
            <a
              target='_blank'
              rel='noopener noreferrer'
              role={`acessar o ${props.name}`}
            >
              <ArrowSquareOut />
            </a>
          </Link>
        )}
      </Styled.BoxDetails>
    </StackBox>
  )
}

export default ModalDetails
