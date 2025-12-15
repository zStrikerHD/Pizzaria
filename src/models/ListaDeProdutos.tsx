class Cardapio {
  description: string
  image: string
  infos: string[]
  title: string
  id: number
  categoria: string

  constructor(
    id: number,
    description: string,
    image: string,
    infos: string[],
    title: string,
    categoria: string
  ) {
    this.id = id
    this.description = description
    this.image = image
    this.infos = infos
    this.title = title
    this.categoria = categoria
  }
}

export default Cardapio
