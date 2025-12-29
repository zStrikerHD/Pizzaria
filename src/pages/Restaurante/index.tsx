import { useParams } from 'react-router-dom'
import { Image, Paragrafo, Title } from './styles'
import Header from '../../components/Header'
import ProdutosList from '../../components/ProdutosList'
import Footer from '../../components/Footer'
import { useEffect, useState } from 'react'
import { Restaurante as RestauranteType } from '../Home' // ajuste o caminho conforme necessário

const Restaurante = () => {
  const { id } = useParams()
  const [restaurante, setRestaurante] = useState<RestauranteType>()

  useEffect(() => {
    fetch(`https://fake-api-havokk.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurante(res))
  }, [id])

  if (!restaurante) {
    return <h3>Carregando...</h3>
  }

  return (
    <>
      <Header />
      <Image style={{ backgroundImage: `url(${restaurante.capa})` }}>
        <div className="container">
          <Paragrafo>{restaurante.tipo}</Paragrafo>
          <Title>{restaurante.titulo}</Title>
        </div>
      </Image>
      <ProdutosList items={restaurante.cardapio} variant="pizza" />
      <Footer />
    </>
  )
}

export default Restaurante
