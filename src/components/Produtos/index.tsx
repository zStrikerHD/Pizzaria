import Tag from '../Tag'
import {
  Card,
  Descricao,
  Infos,
  Titulo,
  SaibaMais,
  Capa,
  AddButton
} from './styles'

type Props = {
  id: number
  description: string
  image: string
  infos?: string[]
  title: string
  variant?: 'restaurante' | 'pizza'
}

const Produtos = ({
  description,
  image,
  infos,
  title,
  id,
  variant = 'restaurante'
}: Props) => (
  <Card variant={variant}>
    <Capa src={image} alt={title} />

    {variant === 'restaurante' && infos && (
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
    )}

    <Titulo variant={variant}>{title}</Titulo>

    <Descricao variant={variant}>{description}</Descricao>

    {variant === 'restaurante' ? (
      <SaibaMais to={`/restaurante/${id}`}>Saiba Mais</SaibaMais>
    ) : (
      <AddButton>Adicionar ao carrinho</AddButton>
    )}
  </Card>
)

export default Produtos
