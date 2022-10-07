import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { Container } from 'components/Layout/Base'
import { ContainerRouter } from '../../styles/routeStyles'
import { useData } from 'hooks/useData'
import { Heading } from 'components/Heading'
import { ModalButton } from 'features/Card/styles'
import { useEffect, useState } from 'react'
import { ContextProps } from 'contexts/DataContext/types'
const Footer = dynamic(() => import('../../components/Footer'))

const Body = dynamic(() => import('features/ModalDetails'))

const MobilePage: NextPage = () => {
  const [object, setObject] = useState<ContextProps>()
  const router = useRouter()
  const { data } = useData()
  const param = router.query
  useEffect(() => {
    const findData = data.filter((f) => f.id === param.id)
    setObject(findData[0])
  }, [param, data])
  console.log(object)
  return (
    <>
      {typeof window !== 'undefined' && (
        <Container>
          <Head>
            <title>`Manu Coutinho | ${object?.name}`</title>
          </Head>
          <ContainerRouter>
            <Heading as='h2' size='big'>
              {object?.name}
            </Heading>
            <Body {...object} />
            <ModalButton type='button' onClick={() => router.back()}>
              Voltar
            </ModalButton>
          </ContainerRouter>
          <Footer />
        </Container>
      )}
    </>
  )
}

export default MobilePage
