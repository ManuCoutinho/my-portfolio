import Link from 'next/link'
import { FiGithub } from 'react-icons/fi'
import { MdOpenInNew } from 'react-icons/md'
import { Props } from './types'

import { StackBox, Text } from '../../Layout/Base'
import { BoxDetails, ModalBody, Topic } from './styles'

const ModalContentDetails: React.FC<Props> = ({ ...props }) => {
  return (
    <ModalBody id='details'>
      <StackBox>
        <BoxDetails>
          <Text>
            <Topic>Descrição: </Topic>
            {props.description}
          </Text>
        </BoxDetails>
        {!!props.framework && (
          <BoxDetails>
            <Text>
              <Topic>Framework: </Topic>
              {props.framework}
            </Text>
          </BoxDetails>
        )}
        <BoxDetails>
          <Text>
            <Topic>Linguagens e Ferramentas: </Topic>
            {props.tools}
          </Text>
        </BoxDetails>
        <BoxDetails>
          <Text>
            <Topic>Estilização: </Topic>
            {props.styles}
          </Text>
        </BoxDetails>
        <BoxDetails>
          <Text>
            <Topic>API: </Topic>
            {props.api}
          </Text>
        </BoxDetails>
        <BoxDetails>
          <Topic>Disponível em: </Topic>
          <Link href={''} passHref>
            <a
              target='_blank'
              rel='noopener noreferrer'
              role='repositorio no github'
            >
              <FiGithub />
            </a>
          </Link>
          {!!props.site && (
            <Link href={''} passHref>
              <a
                target='_blank'
                rel='noopener noreferrer'
                role={`acessar o ${props.title}`}
              >
                <MdOpenInNew />
              </a>
            </Link>
          )}
        </BoxDetails>
      </StackBox>
    </ModalBody>
  )
}

export default ModalContentDetails
