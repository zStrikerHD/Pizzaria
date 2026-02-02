import { CartContainer, Overlay, Sidebar, CartItem, Prices } from './styles'

import { AddButton } from '../Produtos/styles'
import { close, remove } from '../../store/reduces/cart'
import { open as openCheckout } from '../../store/reduces/checkout'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import lixeira from '../../assets/images/lixeira-de-reciclagem 1.png'

export const formataPReco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const handleContinue = () => {
    dispatch(close())
    dispatch(openCheckout())
  }
  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img className="produto" src={item.foto} />
              <div className="info">
                <h3>{item.nome}</h3>
                <span>{formataPReco(item.preco)}</span>
              </div>
              <img
                className="lixeira"
                src={lixeira}
                alt="Remover item"
                onClick={() => removeItem(item.id)}
              />
            </CartItem>
          ))}
        </ul>
        <Prices>
          <h3>Valor Total</h3>
          <span>{formataPReco(getTotalPrice())}</span>
        </Prices>
        <AddButton onClick={handleContinue}>Continuar com a entrega</AddButton>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
