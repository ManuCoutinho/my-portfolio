import { useEffect, useState } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import { useData } from 'hooks/useData'
import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'
import { Button } from 'components/Button'
import { DataProps } from 'features/Card/types'
import initialState from 'constants/initialState'

const Footer = dynamic(() => import('components/Footer'))
const Body = dynamic(() => import('features/CardContentDetails'))

const MobilePage: NextPage = () => {
  const [object, setObject] = useState<DataProps>(initialState)
  const router = useRouter()
  const { data } = useData()
  const param = router.query
  const { colors } = useTheme()
  useEffect(() => {
    const findData = data?.filter((f) => f.id === param.id)
    setObject(findData[0])
  }, [param, data])

  return (
    <>
      {typeof window !== 'undefined' && (
        <StackBox center gap={2} mt='1.5rem' bg={colors.background}>
          <Head>
            <title>{`Manu Coutinho | ${object?.name}`}</title>
          </Head>
          <StackBox direction='column' justify='center' align='center'>
            <Heading as='h2' size='big'>
              {object?.name}
            </Heading>
            <Body {...object} />
            <Button onClick={() => router.back()}>Voltar</Button>
          </StackBox>
          <Footer />
        </StackBox>
      )}
    </>
  )
}

export default MobilePage
