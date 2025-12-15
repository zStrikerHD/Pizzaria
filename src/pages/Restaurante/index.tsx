import { useParams } from 'react-router-dom'
import { cardapio } from '../../data/cardapio'
import RestauranteItaliano from './restauranteItaliano'
import RestauranteJapones from './restauranteJapones'

const Restaurante = () => {
  const { id } = useParams()

  const restaurante = cardapio.find((item) => item.id === Number(id))

  if (!restaurante) {
    return <h1>Restaurante não encontrado</h1>
  }

  switch (restaurante.categoria.toLocaleLowerCase()) {
    case 'italiana':
      return <RestauranteItaliano data={restaurante} />

    case 'japonesa':
      return <RestauranteJapones data={restaurante} />

    default:
      return <h1>Categoria não suportada</h1>
  }
}

export default Restaurante
