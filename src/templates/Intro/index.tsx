import { useEffect } from 'react'
import * as Styled from './styles'
import { useRouter } from 'next/router'

const intro = '/assets/intro.webm'

const Intro: React.FC = () => {
	const { replace } = useRouter()

	useEffect(() => {
		setTimeout(() => replace('/home'), 5000)
	}, [replace])

	return (
		<Styled.Container>
			<Styled.Video src={intro} autoPlay muted preload='auto' />
			<Styled.Greetings>
				<h1>Welcome !</h1>
			</Styled.Greetings>
		</Styled.Container>
	)
}

export default Intro
