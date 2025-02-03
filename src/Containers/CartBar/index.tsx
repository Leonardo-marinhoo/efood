import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { ToCurrency } from '../../utils/FormatCurrency'
import { IoMdArrowBack } from 'react-icons/io'
import { removeFromCart, setCartVisibility } from '../../store/reducers/cart'
import { RiDeleteBin6Line } from 'react-icons/ri'
import CheckoutForm from '../CheckoutForm'
import { useState } from 'react'

const CartBar = () => {
  const { items, isVisible } = useSelector((state: RootReducer) => state.Cart)
  const dispatch = useDispatch()
  const [OnCheckout, setOnCheckout] = useState(false)

  const closeCart = () => {
    dispatch(setCartVisibility(false))
  }
  const removeItem = (id: number) => {
    dispatch(removeFromCart(id))
  }

  const cartValue = items.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)
  return (
    <S.SidebarContainer $visible={isVisible}>
      <S.CloseBar onClick={() => closeCart()}>
        <IoMdArrowBack />
        <span>Voltar</span>
      </S.CloseBar>
      {OnCheckout ? (
        <S.SidebarContent>
          <CheckoutForm OnCancel={() => setOnCheckout(false)} />
        </S.SidebarContent>
      ) : (
        <S.SidebarContent>
          <S.SidebarHeader>
            <span>Carrinho</span>
          </S.SidebarHeader>
          <S.ProductList>
            {items.map((product, index) => (
              <S.Product key={index}>
                <S.ProductThumb src={product.foto} />
                <S.ProductDetails>
                  <S.ProductTitle>{product.nome}</S.ProductTitle>
                  <S.ProductPrice>
                    R$ {ToCurrency(product.preco)}
                  </S.ProductPrice>
                </S.ProductDetails>
                <S.DeleteButton onClick={() => removeItem(product.id)}>
                  <RiDeleteBin6Line />
                </S.DeleteButton>
              </S.Product>
            ))}
          </S.ProductList>
          <S.Total>
            <span>Valor Total</span>
            <span>{ToCurrency(cartValue)}</span>
          </S.Total>
          <S.Button onClick={() => setOnCheckout(true)}>
            Continuar com a entrega
          </S.Button>
        </S.SidebarContent>
      )}
    </S.SidebarContainer>
  )
}

export default CartBar
