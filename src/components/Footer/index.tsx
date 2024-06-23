import { FooterContainer } from './styles'

const Footer: React.FC = () => {
	const year = new Date().getFullYear()
	return (
		<FooterContainer data-testid='footer'>
			<p>Copyright ©{year} Todos os direitos reservados. </p>
			<p>
				Designed by <span>Manu Coutinho.</span>
			</p>
		</FooterContainer>
	)
}
export default Footer
