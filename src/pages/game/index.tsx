import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext/DataContext'

import { Container, Title } from '../../components/Layout/Base'
import { ModalButton as Button } from '../../components/Layout/Buttons'
import { ContainerRouter } from '../../styles/routeStyles'

const Footer = dynamic(() => import('../../components/Footer'))

const Body = dynamic(
  () => import('../../components/PortfolioSection/Modal/ModalContentDetails')
)

const MataMosquitos: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[6].name}`</title>
          </Head>
          <ContainerRouter>
            <Title>{data[6].name}</Title>
            <Body
              title={''}
              description={data[6].description}
              framework={data[6].framework}
              site={data[6].site}
              repo={data[6].repo}
              styles={data[6].styles}
              api={data[6].api}
              tools={data[6].tools}
            />
            <Button type='button' onClick={() => router.back()}>
              Voltar
            </Button>
          </ContainerRouter>
          <Footer />
        </Container>
      )}{' '}
    </>
  )
}

export default MataMosquitos
