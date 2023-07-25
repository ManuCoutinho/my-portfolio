import Image from 'next/image'
import { useRouter } from 'next/router'

import { Button } from 'components/Button'
import { StackBox } from 'components/StackBox'
import { Heading } from 'components/Heading'

import { Text } from 'components/Text'

const notFoundImage = '/assets/404.svg'

export const Error: React.FC = () => {
	const router = useRouter()
	return (
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
						Parece que você chegou o limite deste universo.
					</Text>
					<Button onClick={() => router.push('/')} size='md' variant='ghost'>
						Voltar
					</Button>
				</StackBox>
			</StackBox>
		</StackBox>
	)
}
