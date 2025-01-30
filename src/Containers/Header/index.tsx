import { Container } from '../../styles/GlobalStyle'
import Branding from '../../components/Branding'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setCartVisibility } from '../../store/reducers/cart'

type Props = {
  home_page?: boolean
}

export const Header = ({ home_page }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.Cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(setCartVisibility(true))
  }

  const cartCount = () => `${items.length} - produto(s) no carrinho`

  return (
    <S.HeaderBar $home_page={home_page}>
      <Container $flex_row $align_items>
        {!home_page && (
          <S.PageLinks>
            <S.PageItem>
              <Link to={'/'}>Restaurantes</Link>
            </S.PageItem>
          </S.PageLinks>
        )}
        <Branding />
        {!home_page && (
          <S.Cart onClick={() => openCart()}>
            <S.ItemCounter>{cartCount()}</S.ItemCounter>
          </S.Cart>
        )}
      </Container>
    </S.HeaderBar>
  )
}

export default Header
