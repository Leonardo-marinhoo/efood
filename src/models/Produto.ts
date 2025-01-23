class Produto {
  id: number
  nome: string
  foto: string
  preco: number
  descricao: string
  porcao: string

  constructor(
    id: number,
    nome: string,
    foto: string,
    preco: number,
    descricao: string,
    porcao: string
  ) {
    this.id = id
    this.nome = nome
    this.foto = foto
    this.preco = preco
    this.descricao = descricao
    this.porcao = porcao
  }
}

export default Produto
