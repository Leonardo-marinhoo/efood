import { Container } from '../../../styles/GlobalStyle'
import Branding from '../../Branding'
import * as S from './styles'
import { Link } from 'react-router-dom'

type Props = {
  homePage?: boolean
}

export const Header = ({ homePage }: Props) => {
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
          <S.Cart>
            <S.ItemCounter>{'0 - produto(s) no carrinho'}</S.ItemCounter>
          </S.Cart>
        )}
      </Container>
    </S.HeaderBar>
  )
}

export default Header
