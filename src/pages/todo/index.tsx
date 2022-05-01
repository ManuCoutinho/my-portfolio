import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ModalContext } from '../../components/Contexts/ModalContext/DataContext'

import { Container, Title } from '../../components/Layout/Base'
import { ModalButton as Button } from '../../components/Layout/Buttons'
import { ContainerRouter } from '../../styles/routeStyles'

const Footer = dynamic(() => import('../../components/Footer'))

const Body = dynamic(
  () => import('../../components/PortfolioSection/Modal/ModalContentDetails')
)

const TodoList: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <Container>
      <Head>
        <title>`Manu Coutinho | ${data[5].name}`</title>
      </Head>
      <ContainerRouter>
        <Title>{data[5].name}</Title>
        <Body
          title={''}
          description={data[5].description}
          framework={data[5].framework}
          site={data[5].site}
          repo={data[5].repo}
          styles={data[5].styles}
          api={data[5].api}
          tools={data[5].tools}
        />
        <Button type='button' onClick={() => router.back()}>
          Voltar
        </Button>
      </ContainerRouter>
      <Footer />
    </Container>
  )
}

export default TodoList
