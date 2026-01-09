import { Restaurante } from '../../pages/Home'
import { Image, Paragrafo, Title } from './styled'

type Props = {
  restaurante: Restaurante
}

const Cardapio = ({ restaurante }: Props) => {
  return (
    <Image style={{ backgroundImage: `url(${restaurante.capa})` }}>
      <div className="container">
        <Paragrafo>{restaurante.tipo}</Paragrafo>
        <Title>{restaurante.titulo}</Title>
      </div>
    </Image>
  )
}

export default Cardapio
