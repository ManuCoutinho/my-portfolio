import { FooterContainer } from './styles'

const Footer = ({ bgPage }: { bgPage: boolean }) => {
  return (
    <FooterContainer bgPage={bgPage}>
      <p>Copyright © 2022 Todos os direitos reservados. </p>
      <p>
        Designed by <span>Manu Coutinho.</span>
      </p>
    </FooterContainer>
  )
}
export default Footer
