import { useContext } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'

import { Container, Title } from '../../components/Layout/Base'
import { ModalButton as Button } from '../../components/Layout/Buttons'
import { ContainerRouter } from '../../styles/routeStyles'

import { ModalContext } from '../../contexts/ModalContext/DataContext'

const Footer = dynamic(() => import('../../components/Footer'))

const Body = dynamic(
  () => import('../../components/PortfolioSection/Modal/ModalContentDetails')
)

const Dashboard: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[4].name}`</title>
          </Head>
          <ContainerRouter>
            <Title>{data[4].name}</Title>
            <Body
              title={''}
              description={data[4].description}
              framework={data[4].framework}
              site={data[4].site}
              repo={data[4].repo}
              styles={data[4].styles}
              api={data[4].api}
              tools={data[4].tools}
            />
            <Button type='button' onClick={() => router.back()}>
              Voltar
            </Button>
          </ContainerRouter>
          <Footer />
        </Container>
      )}
    </>
  )
}

export default Dashboard
