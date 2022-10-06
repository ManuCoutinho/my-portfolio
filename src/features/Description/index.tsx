import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'
import { Text } from 'components/Text'

export const Description = () => {
  return (
    <StackBox direction='column'>
      <Heading as='h3' size='small'>
        <span>Olá, sou</span> Manu Coutinho!
      </Heading>
      <Text>
        Eu sou uma desenvolvedora front-end, movida por uma paixão em construir
        coisas capazes de integrar diversos universos por meio da tecnologia.
      </Text>
      <Text>
        Gosto de desenvolver interfaces dinâmicas, de alta fidelidade e com
        designs pensados para transferir a melhor experiência ao usuário final.
      </Text>
      <Text>
        Minha abordagem para a resolução de problemas é altamente inclusiva,
        colaborativa e centrada no ser humano.
      </Text>
      <Text>Nesta página, irei compartilhar alguns dos meus projetos!</Text>
    </StackBox>
  )
}
