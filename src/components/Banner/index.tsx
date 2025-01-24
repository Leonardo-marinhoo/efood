import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
const Banner = () => {
  const { capa, titulo, tipo } = useSelector((state: RootReducer) => state.Menu)
  return (
    <S.BannerContainer capa={capa}>
      <S.TypeTitle>{tipo}</S.TypeTitle>
      <S.RestaurantTitle>{titulo}</S.RestaurantTitle>
    </S.BannerContainer>
  )
}

export default Banner
