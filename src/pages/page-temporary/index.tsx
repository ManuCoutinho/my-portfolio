import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { StackBoxCenter, Text } from '../../components/Layout/Base'
import { ModalButton } from '../../components/Layout/Buttons'
import Container from './styles'

const PageTemporary: NextPage = () => {
  const router = useRouter()

  return (
    <Container>
      <Head>
        <title>Manu Coutinho | Em breve...</title>
      </Head>
      <StackBoxCenter>
        <Text>Em breve um novo conteúdo! 🤩</Text>
        <ModalButton type='button' onClick={() => router.back()}>
          Voltar
        </ModalButton>
      </StackBoxCenter>
    </Container>
  )
}

export default PageTemporary
