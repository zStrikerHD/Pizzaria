import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'
import { Container, SectionTitle, Links, FooterSection } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </SectionTitle>
        <Links>
          <li>
            <Link to="/">
              <img src={instagram} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={twitter} alt="" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img src={facebook} alt="" />
            </Link>
          </li>
        </Links>
      </FooterSection>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </Container>
)

export default Footer
