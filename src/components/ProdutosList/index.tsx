import Cardapio from '../../models/ListaDeProdutos'
import Produtos from '../Produtos'
import { Container, List } from './styles'

export type Props = {
  items: Cardapio[]
  variant?: 'restaurante' | 'pizza'
}

const ProdutosList = ({ items, variant = 'restaurante' }: Props) => (
  <Container>
    <div className="container">
      <List variant={variant}>
        {items.map((item) => (
          <Produtos
            key={item.id}
            id={item.id}
            description={item.description}
            image={item.image}
            infos={item.infos}
            title={item.title}
            variant={variant}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProdutosList
