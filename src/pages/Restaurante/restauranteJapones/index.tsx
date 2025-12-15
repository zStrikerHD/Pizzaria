import fundoSushi from '../../../assets/images/macarrao-imagem-fundo.png'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { Image, Paragrafo, Title, StatusBadge } from './styles'

type Props = {
  data: {
    title: string
    description: string
    image: string
    categoria: string
  }
}

const RestauranteJapones = ({ data }: Props) => (
  <>
    <Header />
    <Image style={{ backgroundImage: `url(${fundoSushi})` }}>
      <div className="container">
        <StatusBadge>Em desenvolvimento</StatusBadge>
        <Paragrafo>{data.categoria}</Paragrafo>
        <Title>{data.title}</Title>
      </div>
    </Image>
    <Footer />
  </>
)

export default RestauranteJapones
