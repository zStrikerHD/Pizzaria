import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ProdutosList from '../../components/ProdutosList'

export type ItemCardapio = {
  foto: string
  preco: string
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
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurantes(res))
  }, [])

  return (
    <>
      <Banner />
      <ProdutosList items={restaurantes} variant="restaurante" />
      <Footer />
    </>
  )
}

export default Home
