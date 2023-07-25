import { useRouter } from 'next/router'
import HomeAnimation from 'components/Animation'
import { AnimatedText } from 'components/AnimatedText'
import { Button } from 'components/Button'
import { SocialLinks } from 'features/SocialLinks'

import animationData from 'data/home.json'
import * as Styled from './styles'

const HomeSection: React.FC = () => {
	const { push } = useRouter()
	return (
		<Styled.Container id='home'>
			<Styled.Wrapper>
				<Styled.BoxCenter>
					<AnimatedText />
					<Button onClick={() => push('/#portfolio')} size='full'>
						Conheça meus projetos!
					</Button>
				</Styled.BoxCenter>
				<Styled.BoxLottie>
					<HomeAnimation data={animationData} />
				</Styled.BoxLottie>
			</Styled.Wrapper>
			<SocialLinks showToggle />
		</Styled.Container>
	)
}

export default HomeSection
