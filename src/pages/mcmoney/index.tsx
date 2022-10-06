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

const McMoney: NextPage = () => {
  const router = useRouter()
  const { data } = useData()

  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${data[3].name}`</title>
          </Head>
          <ContainerRouter>
            <Heading as='h2' size='big'>
              {data[3].name}
            </Heading>
            <Body
              title={''}
              description={data[3].description}
              framework={data[3].framework}
              site={data[3].site}
              repo={data[3].repo}
              styles={data[3].styles}
              api={data[3].api}
              tools={data[3].tools}
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

export default McMoney
