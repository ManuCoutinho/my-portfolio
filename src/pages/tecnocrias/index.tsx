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

const Tecnocrias: NextPage = () => {
  const router = useRouter()
  const { data } = useContext(ModalContext)

  return (
    <Container>
      <Head>
        <title>`Manu Coutinho | ${data[7].name}`</title>
      </Head>
      <ContainerRouter>
        <Title>{data[7].name}</Title>
        <Body
          title={''}
          description={data[7].description}
          framework={data[7].framework}
          site={data[7].site}
          repo={data[7].repo}
          styles={data[7].styles}
          api={data[7].api}
          tools={data[7].tools}
        />
        <Button type='button' onClick={() => router.back()}>
          Voltar
        </Button>
      </ContainerRouter>
      <Footer />
    </Container>
  )
}

export default Tecnocrias
