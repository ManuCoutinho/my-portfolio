import { Fragment } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { NextPage } from 'next'
import { StackBox } from 'components/StackBox'
import { Heading } from 'components/Heading'
import { Button } from 'components/Button'
import { Text } from 'components/Text'
import Image from 'next/image'
import { useTheme } from 'styled-components'
const notFoundImage = '/assets/404.svg'
const notFoundDark = '/assets/404-green.svg'

const NotFound: NextPage = () => {
  const router = useRouter()
  const { title } = useTheme()
  const bg = title === 'light' ? notFoundImage : notFoundDark
  return (
    <Fragment>
      <Head>
        <title>Manu Coutinho | Not found </title>
      </Head>
      <StackBox center>
        <StackBox direction='column' align='center' gap={1}>
          <StackBox size='30vw'>
            <Image
              width='300px'
              height='300px'
              loading='lazy'
              src={bg}
              alt='error image'
            />
          </StackBox>
          <StackBox
            direction='column'
            justify='center'
            align='center'
            gap={2}
            size='60vw'
          >
            <Heading as='h3' size='big'>
              Opss! Como você chegou aqui?
            </Heading>
            <Text>
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
