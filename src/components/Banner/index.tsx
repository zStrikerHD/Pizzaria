import { Image, Imagem, Title } from './styles'

import fundo from '../../assets/images/fundo.png'
import logo from '../../assets/images/logo.png'

const Banner = () => (
  <Image style={{ backgroundImage: `url(${fundo})` }}>
    <div className="container">
      <Imagem src={logo} alt="" />
      <Title>
        <span>Viva experiências gastronômicas</span>
        <span>no conforto da sua casa</span>
      </Title>
    </div>
  </Image>
)

export default Banner
