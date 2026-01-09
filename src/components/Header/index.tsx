import fundo from '../../assets/images/fundo.png'
import { HeaderBar, Center, Left, Right, Image } from './styles'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { open } from '../../store/reduces/cart'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
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
            <a onClick={openCart}>{items.length} produto(s) no carrinho</a>
          </Right>
        </HeaderBar>
      </div>
    </Image>
  )
}

export default Header
