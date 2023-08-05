import { FooterContainer } from './styles'

const Footer: React.FC = () => {
	return (
		<FooterContainer data-testid='footer'>
			<p>Copyright © 2023 Todos os direitos reservados. </p>
			<p>
				Designed by <span>Manu Coutinho.</span>
			</p>
		</FooterContainer>
	)
}
export default Footer
