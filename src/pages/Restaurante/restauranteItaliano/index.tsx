import fundoMacarrao from '../../../assets/images/macarrao-imagem-fundo.png'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import { Image, Paragrafo, Title } from './styles'
import ProdutosList from '../../../components/ProdutosList'
import { cardapioPizza } from '../../../data/cardapio'

type Props = {
  data: {
    title: string
    description: string
    image: string
    categoria: string
  }
}

const RestauranteItaliano = ({ data }: Props) => {
  const pizzasItalianas = cardapioPizza.filter(
    (item) => item.categoria.toLowerCase() === 'italiana'
  )

  return (
    <>
      <Header />
      <Image style={{ backgroundImage: `url(${fundoMacarrao})` }}>
        <div className="container">
          <Paragrafo>{data.categoria}</Paragrafo>
          <Title>{data.title}</Title>
        </div>
      </Image>
      <ProdutosList items={pizzasItalianas} variant="pizza" />
      <Footer />
    </>
  )
}

export default RestauranteItaliano
