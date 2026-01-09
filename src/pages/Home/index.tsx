import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ProdutosList from '../../components/ProdutosList'
import {} from '../../'
import { useGetFeacturedRestauranteQuery } from '../../services/api'

export type ItemCardapio = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export type Restaurante = {
  categoria: string
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

const Home = () => {
  const { data: restaurante } = useGetFeacturedRestauranteQuery()

  if (restaurante) {
    return (
      <>
        <Banner />
        <ProdutosList items={restaurante} variant="restaurante" />
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
