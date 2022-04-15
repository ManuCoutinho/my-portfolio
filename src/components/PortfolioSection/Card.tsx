import Image from 'next/image'
import { StackBox, Subtitle } from '../Layout/Base'
import { CardComponent, Description } from './styles'

export const Card = () => {
  return (
    <StackBox>
      <CardComponent>
        <Image
          loading='lazy'
          width={300}
          height={300}
          alt='imag temporaria'
          src='/assets/sample.webp'
        />
        <Subtitle>Nome do Projeto</Subtitle>
        <Description>Em breve um conteúdo aqui! 💃🏽.</Description>
      </CardComponent>
    </StackBox>
  )
}
