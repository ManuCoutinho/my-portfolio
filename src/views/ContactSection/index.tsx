import FooterAnimation from 'components/Animation'
import { SocialLinks } from 'features/SocialLinks'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'

import animationData from 'data/footer.json'

import * as Styled from './styles'
import { StackBox } from 'components/StackBox'

const Contact: React.FC = () => {
	return (
		<Styled.ContactSection id='contact'>
			<Heading as='h2' size='big'>
				Contato
			</Heading>
			<Styled.Container>
				<Styled.BoxAnimation>
					<FooterAnimation data={animationData} />
				</Styled.BoxAnimation>
				<StackBox direction='column' align='center' gap={1.5}>
					<Heading as='h3' size='small'>
						Fale Comigo!
					</Heading>
					<Text align='left'>
						Caso queira saber mais sobre o meu trabalho, e/ou solicitar um
						orçamento, fique à vontade para entrar em contato pelos canais
						abaixo.
					</Text>
					<SocialLinks direction='row' hideIcon={['github', 'dev.to']} />
				</StackBox>
			</Styled.Container>
		</Styled.ContactSection>
	)
}
export default Contact
