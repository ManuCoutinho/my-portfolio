import { FooterContainer } from './styles'
import { FooterProps } from './types'

const Footer: React.FC<FooterProps> = ({ bgPage }) => {
  return (
    <FooterContainer bgPage={bgPage} data-testid='footer'>
      <p>Copyright © 2022 Todos os direitos reservados. </p>
      <p>
        Designed by <span>Manu Coutinho.</span>
      </p>
    </FooterContainer>
  )
}
export default Footer
