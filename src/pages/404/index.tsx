import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { StackBox } from 'components/StackBox'
import { Heading } from 'components/Heading'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import Image from 'next/image'

const notFoundImage = '/assets/404.svg'

const NotFound: NextPage = () => {
  const router = useRouter()

  return (
    <Fragment>
      <Head>
        <title>Manu Coutinho | Not found </title>
      </Head>
      <StackBox justify='center' align='center' direction='column'>
        <StackBox direction='column' align='center' gap={1}>
          <StackBox justify='center'>
            <Image
              width='800px'
              height='500px'
              loading='lazy'
              src={notFoundImage}
              alt='error image'
            />
          </StackBox>
          <StackBox direction='column' justify='center' align='center' gap={1}>
            <Heading as='h3' size='big'>
              Opss! Como você chegou aqui?
            </Heading>
            <Text align='center'>
              Sentimos muito pelo incoveniente, mas parece que você está
              tentando acessar uma página que não existe.
            </Text>
            <Button onClick={() => router.push('/')} type='button'>
              Voltar
            </Button>
          </StackBox>
        </StackBox>
      </StackBox>
    </Fragment>
  )
}
export default NotFound
