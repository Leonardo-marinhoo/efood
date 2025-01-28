import { Container } from '../../styles/GlobalStyle'
import Branding from '../../components/Branding'
import * as S from './styles'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { setCartVisibility } from '../../store/reducers/cart'

type Props = {
  homePage?: boolean
}

export const Header = ({ homePage }: Props) => {
  const { items } = useSelector((state: RootReducer) => state.Cart)
  const dispatch = useDispatch()

  const openCart = () => {
    dispatch(setCartVisibility(true))
  }

  const cartCount = () => `${items.length} - produto(s) no carrinho`

  return (
    <S.HeaderBar homePage={homePage}>
      <Container $flex_row $align_items>
        {!homePage && (
          <S.PageLinks>
            <S.PageItem>
              <Link to={'/'}>Restaurantes</Link>
            </S.PageItem>
          </S.PageLinks>
        )}
        <Branding />
        {!homePage && (
          <S.Cart onClick={() => openCart()}>
            <S.ItemCounter>{cartCount()}</S.ItemCounter>
          </S.Cart>
        )}
      </Container>
    </S.HeaderBar>
  )
}

export default Header
