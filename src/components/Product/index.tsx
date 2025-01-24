import * as S from './styles'
import Produto from '../../models/Produto'

type Props = {
  product: Produto
  onclick: () => void
}

const Product = ({ product, onclick }: Props) => {
  return (
    <S.Card>
      <S.Header image={product.foto} />
      <S.Body>
        <S.Title>{product.nome}</S.Title>
        <S.Description>{product.descricao}</S.Description>
        <S.Button onClick={onclick}>Saiba mais</S.Button>
      </S.Body>
    </S.Card>
  )
}

export default Product
