import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { useData } from 'hooks/useData'

import { Button } from 'components/Button'
import { Heading } from 'components/Heading'
import { StackBox } from 'components/StackBox'

import initialState from 'constants/initialState'
import SEO from 'constants/seo'
import { DataType } from '@models/data'
import { MobileContainer } from 'styles/mixins/layout'

const Footer = dynamic(() => import('components/Footer'))
const Body = dynamic(
	() => import('features/Polaroids/ModalContent/CardContentDetails')
)

function DetailsTemplate(): JSX.Element {
	const [object, setObject] = useState<DataType>(initialState)
	const router = useRouter()
	const { data } = useData()
	const param = router.query

	useEffect(() => {
		const findData = data?.filter(({ id }) => id === param.id)
		setObject(findData[0])
	}, [param, data])

	return (
		<MobileContainer>
			<NextSeo
				title={`${SEO.title} | ${object?.name}`}
				description={object?.description}
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
				<Button onClick={() => router.back()} size='sm'>
					Voltar
				</Button>
			</StackBox>
			<Footer bgPage />
		</MobileContainer>
	)
}

export default DetailsTemplate
