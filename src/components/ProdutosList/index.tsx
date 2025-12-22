import { ItemCardapio, Restaurante } from '../../pages/Home'
import Produtos from '../Produtos'
import { Container, List } from './styles'

export type Props = {
  items: Restaurante[] | ItemCardapio[]
  variant?: 'restaurante' | 'pizza'
}

const isRestaurante = (
  item: Restaurante | ItemCardapio
): item is Restaurante => {
  return 'tipo' in item
}

const ProdutosList = ({ items, variant = 'restaurante' }: Props) => {
  return (
    <Container>
      <div className="container">
        <List variant={variant}>
          {items.map((item) => (
            <Produtos
              key={item.id}
              id={item.id}
              description={item.descricao}
              image={'capa' in item ? item.capa : item.foto}
              tipo={isRestaurante(item) ? item.tipo : undefined}
              title={'titulo' in item ? item.titulo : item.nome}
              variant={variant}
              preco={'preco' in item ? item.preco : undefined}
              porcao={'porcao' in item ? item.porcao : undefined}
              avaliacao={isRestaurante(item) ? item.avaliacao : 0}
            />
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProdutosList
