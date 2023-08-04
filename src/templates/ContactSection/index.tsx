import { useTheme } from 'styled-components'

import { useMediaMobile } from 'hooks/useMediaMobile'

import FooterAnimation from 'components/Animation'
import { StackBox } from 'components/StackBox'
import { SocialLinks } from 'modules/SocialLinks'
import { Heading } from 'components/Heading'
import { Text } from 'components/Text'

import animationLight from 'data/footer.json'
import animationDark from 'data/footer-dark.json'

import * as Styled from './styles'

const Contact: React.FC = () => {
	const { isTouchDevice } = useMediaMobile()
	const { title } = useTheme()
	const animation = title === 'light' ? animationLight : animationDark

	return (
		<Styled.ContactSection id='contact'>
			<Heading as='h2' size='big'>
				Contato
			</Heading>
			<Styled.Container>
				<Styled.BoxAnimation>
					<FooterAnimation data={animation} />
				</Styled.BoxAnimation>
				<StackBox direction='column' align='center' gap={1.5}>
					<Heading as='h3' size='small'>
						Fale Comigo!
					</Heading>
					<Text align='left'>
						Caso queira saber mais sobre o meu trabalho, e/ou solicitar um
						orçamento, fique à vontade para entrar em contato pelos canais
						listados.
					</Text>
					{isTouchDevice && (
						<SocialLinks direction='row' hideIcon={['github', 'dev.to']} />
					)}
				</StackBox>
			</Styled.Container>
		</Styled.ContactSection>
	)
}
export default Contact
