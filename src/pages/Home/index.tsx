import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import ProdutosList from '../../components/ProdutosList'
import { cardapio } from '../../data/cardapio'

const Home = () => (
  <>
    <Banner />
    <ProdutosList items={cardapio} />
    <Footer />
  </>
)

export default Home
