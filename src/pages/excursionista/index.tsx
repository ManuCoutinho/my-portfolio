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

const Excursionista: NextPage = () => {
  const router = useRouter()
  const { data } = useData()

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[0].name}`</title>
          </Head>
          <ContainerRouter>
            <Heading as='h2' size='big'>
              {data[0].name}
            </Heading>
            <Body
              title={''}
              description={data[0].description}
              framework={data[0].framework}
              site={data[0].site}
              repo={data[0].repo}
              styles={data[0].styles}
              api={data[0].api}
              tools={data[0].tools}
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

export default Excursionista
