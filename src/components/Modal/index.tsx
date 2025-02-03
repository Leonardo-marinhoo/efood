import Produto from '../../models/Produto'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { addToCart, setCartVisibility } from '../../store/reducers/cart'
import { ToCurrency } from '../../utils/FormatCurrency'

type Props = {
  product: Produto | null
  isVisible: boolean
  onClose: () => void
}

const Modal = ({ product, isVisible, onClose }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product))
      dispatch(setCartVisibility(true))
    }
    onClose()
    product = null
  }

  if (!isVisible || !product) {
    return null
  }

  return (
    <S.ModalContainer $visible={isVisible}>
      <S.ModalContent>
        <S.CloseButton onClick={() => onClose()} />
        <S.Product>
          <S.ImageWraper>
            <S.ProductImage src={product.foto} />
          </S.ImageWraper>
          <S.ProductDetails>
            <S.ProductTitle>{product.nome}</S.ProductTitle>
            <S.ProductDescription>{product.descricao}</S.ProductDescription>
            <S.ProductDescription margin_top="auto">
              Serve {product.porcao}
            </S.ProductDescription>
            <S.AddButton onClick={() => handleAddToCart()}>
              {ToCurrency(product.preco, 'Adicionar ao carrinho - ')}
            </S.AddButton>
          </S.ProductDetails>
        </S.Product>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
