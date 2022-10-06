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

const InvestSimulator: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[9].name}`</title>
          </Head>
          <ContainerRouter>
            <Title>{data[9].name}</Title>
            <Body
              title={''}
              description={data[9].description}
              framework={data[9].framework}
              site={data[9].site}
              repo={data[9].repo}
              styles={data[9].styles}
              api={data[9].api}
              tools={data[9].tools}
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

export default InvestSimulator
