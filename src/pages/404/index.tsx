import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { StackBox } from 'components/StackBox'
import { Heading } from 'components/Heading'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import Image from 'next/image'

const notFoundImage = '/assets/4.svg'

const NotFound: NextPage = () => {
  const router = useRouter()

  return (
    <Fragment>
      <Head>
        <title>Manu Coutinho | Not found </title>
      </Head>
      <StackBox center>
        <StackBox direction='column' align='center' justify='center' gap={1}>
          <StackBox justify='center' pt='1rem'>
            <Image
              width='700px'
              height='550px'
              loading='lazy'
              src={notFoundImage}
              alt='error image'
              objectFit='cover'
            />
          </StackBox>
          <StackBox
            direction='column'
            justify='center'
            align='center'
            gap={0.5}
            size='60vw'
          >
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
