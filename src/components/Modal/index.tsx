import { useEffect, useState } from 'react'
import Produto from '../../models/Produto'
import * as S from './styles'

type Props = {
  product: Produto | null
}

const Modal = ({ product }: Props) => {
  const [visible, setVisible] = useState<boolean>(false)

  useEffect(() => {
    if (product) {
      setVisible(true)
    }
  }, [product])

  if (!visible || !product) {
    return null
  }

  return (
    <S.ModalContainer $visible={visible}>
      <S.ModalContent>
        <S.CloseButton onClick={(e) => setVisible(false)} />
        <S.ProductImage src={product.foto} />
        <S.ProductInfo>
          <S.ProductTitle>{product.nome}</S.ProductTitle>
          <S.ProductDescription>{product.descricao}</S.ProductDescription>
          <S.ProductDescription margin_top="auto">
            Serve {product.porcao}
          </S.ProductDescription>
          <S.AddButton>Adicionar ao carrinho - R$ {product.preco}</S.AddButton>
        </S.ProductInfo>
      </S.ModalContent>
    </S.ModalContainer>
  )
}

export default Modal
