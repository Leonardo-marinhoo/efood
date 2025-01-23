import * as S from './styles'
import ProdutoClass from '../../models/Produto'

type Props = Omit<ProdutoClass, 'id' | 'cardapio'>

const Product = ({ nome, foto, preco, descricao, porcao }: Props) => {
  return (
    <S.Card>
      <S.Header image={foto} />
      <S.Body>
        <S.Title>{nome}</S.Title>
        <S.Description>{descricao}</S.Description>
        <S.Button to={'/menu'}>Saiba mais</S.Button>
      </S.Body>
    </S.Card>
  )
}

export default Product
