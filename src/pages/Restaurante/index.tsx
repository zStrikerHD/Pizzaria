import { useParams } from 'react-router-dom'
import Header from '../../components/Header'
import ProdutosList from '../../components/ProdutosList'
import Footer from '../../components/Footer'
import { useGetFeacturedCardapioQuery } from '../../services/api'
import Cardapio from '../../components/Cardapio'
import { cardapio } from '../../data/cardapio'

const Restaurante = () => {
  const { id } = useParams()
  const { data: restaurante } = useGetFeacturedCardapioQuery(id!)

  if (!cardapio) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      {restaurante && (
        <>
          <Cardapio restaurante={restaurante} />
          <ProdutosList items={restaurante.cardapio} variant="pizza" />
        </>
      )}
      <Footer />
    </>
  )
}

export default Restaurante
