import Tag from '../Tag'
import {
  Card,
  Descricao,
  Infos,
  Titulo,
  SaibaMais,
  Capa,
  AddButton,
  DivNotaTitle
} from './styles'

import star from '../../assets/images/star_favorite.png'

type Props = {
  id: number
  avaliacao: number
  description: string
  image: string
  tipo?: string
  title: string
  variant?: 'restaurante' | 'pizza'
  preco?: string
  porcao?: string
}

const Produtos = ({
  description,
  image,
  tipo,
  title,
  id,
  variant = 'restaurante',
  avaliacao
}: Props) => {
  const getDescricao = (descricao: string) => {
    if (descricao.length > 95) {
      return descricao.slice(0, 92) + '...'
    }
    return descricao
  }

  return (
    <Card variant={variant}>
      <Capa src={image} alt={title} variant={variant} />

      {variant === 'restaurante' && tipo && (
        <Infos>
          <Tag>{tipo}</Tag>
        </Infos>
      )}

      <DivNotaTitle>
        <li>
          <Titulo variant={variant}>{title}</Titulo>
        </li>
        {variant === 'restaurante' && (
          <li>
            <h2>{avaliacao}</h2>
            <img src={star} alt="Estrela" />
          </li>
        )}
      </DivNotaTitle>

      <Descricao variant={variant}>{getDescricao(description)}</Descricao>

      {variant === 'restaurante' ? (
        <SaibaMais to={`/restaurante/${id}`}>Saiba mais</SaibaMais>
      ) : (
        <AddButton>Mais Detalhes</AddButton>
      )}
    </Card>
  )
}

export default Produtos
