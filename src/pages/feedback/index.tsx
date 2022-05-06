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

const FeedbackWidget: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[13].name}`</title>
          </Head>
          <ContainerRouter>
            <Title>{data[13].name}</Title>
            <Body
              title={''}
              description={data[13].description}
              framework={data[13].framework}
              site={data[13].site}
              repo={data[13].repo}
              styles={data[13].styles}
              api={data[13].api}
              tools={data[13].tools}
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

export default FeedbackWidget
