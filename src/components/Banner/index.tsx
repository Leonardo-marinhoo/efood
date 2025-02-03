import { useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
const Banner = () => {
  const { capa, titulo, tipo } = useSelector((state: RootReducer) => state.Menu)
  return (
    <S.Banner capa={capa}>
      <S.Container>
        <S.TypeTitle>{tipo}</S.TypeTitle>
        <S.RestaurantTitle>{titulo}</S.RestaurantTitle>
      </S.Container>
    </S.Banner>
  )
}

export default Banner
