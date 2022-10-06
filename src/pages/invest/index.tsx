import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Container } from 'components/Layout/Base'
import { ModalButton as Button } from '../../components/Layout/Buttons'
import { ContainerRouter } from '../../styles/routeStyles'
import { useData } from 'hooks/useData'
import { Heading } from 'components/Heading'

const Footer = dynamic(() => import('../../components/Footer'))

const Body = dynamic(
  () => import('features/PortfolioSection/Modal/ModalContentDetails')
)

const InvestSimulator: NextPage = () => {
  const router = useRouter()
  const { data } = useData()

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[9].name}`</title>
          </Head>
          <ContainerRouter>
            <Heading as='h2' size='big'>
              {data[9].name}
            </Heading>
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
