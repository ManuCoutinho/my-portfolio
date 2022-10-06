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

const Digipix: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[10].name}`</title>
          </Head>
          <ContainerRouter>
            <Title>{data[10].name}</Title>
            <Body
              title={''}
              description={data[10].description}
              framework={data[10].framework}
              site={data[10].site}
              repo={data[10].repo}
              styles={data[10].styles}
              api={data[10].api}
              tools={data[10].tools}
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

export default Digipix
