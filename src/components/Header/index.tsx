import fundo from '../../assets/images/fundo.png'
import { HeaderBar, Center, Left, Right, Image } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <Image style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <HeaderBar>
        <Left>
          <Link to="/">Restaurantes</Link>
        </Left>
        <Center>
          <Link to="/">
            <img src={logo} alt="efood" />
          </Link>
        </Center>
        <Right>
          <Link to="#">0 produto(s) no carrinho</Link>
        </Right>
      </HeaderBar>
    </div>
  </Image>
)

export default Header
