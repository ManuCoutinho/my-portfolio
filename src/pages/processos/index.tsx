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

const ConsultaProcessual: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <Container>
      <Head>
        <title>`Manu Coutinho | ${data[11].name}`</title>
      </Head>
      <ContainerRouter>
        <Title>{data[11].name}</Title>
        <Body
          title={''}
          description={data[11].description}
          framework={data[11].framework}
          site={data[11].site}
          repo={data[11].repo}
          styles={data[11].styles}
          api={data[11].api}
          tools={data[11].tools}
        />
        <Button type='button' onClick={() => router.back()}>
          Voltar
        </Button>
      </ContainerRouter>
      <Footer />
    </Container>
  )
}

export default ConsultaProcessual
