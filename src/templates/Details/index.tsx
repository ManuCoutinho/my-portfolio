import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useTheme } from 'styled-components'
import { NextSeo } from 'next-seo'

import { useData } from 'hooks/useData'

import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'
import { Button } from 'components/Button'

import initialState from 'constants/initialState'
import SEO from 'constants/seo'
import { DataProps } from 'features/Card/types'

const Footer = dynamic(() => import('components/Footer'))
const Body = dynamic(() => import('features/CardContentDetails'))

function DetailsTemplate(): JSX.Element {
  const [object, setObject] = useState<DataProps>(initialState)
  const { colors } = useTheme()
  const router = useRouter()
  const { data } = useData()
  const param = router.query

  useEffect(() => {
    const findData = data?.filter(({ id }) => id === param.id)
    setObject(findData[0])
  }, [param, data])

  return (
    <StackBox center gap={2} pt='1.5rem' bg={colors.bg_modal}>
      <NextSeo
        title={`${SEO.title} | ${object?.name}`}
        description={object.description}
        canonical={SEO.canonical}
        themeColor={SEO.color}
        additionalMetaTags={[
          {
            property: 'keywords',
            content: `${SEO.keywords}`
          }
        ]}
      />
      <StackBox direction='column' justify='center' align='center'>
        <Heading as='h2' size='big'>
          {object?.name}
        </Heading>
        <Body {...object} />
        <Button onClick={() => router.back()}>Voltar</Button>
      </StackBox>
      <Footer bgPage />
    </StackBox>
  )
}

export default DetailsTemplate
