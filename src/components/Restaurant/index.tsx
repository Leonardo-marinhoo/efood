import * as S from './styles'
import { Badge } from '../../styles/GlobalStyle'
import RestauranteClass from '../../models/Restaurante'

type Props = Omit<RestauranteClass, 'cardapio'>

const Restaurant = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Props) => {
  return (
    <S.Card>
      <S.Header image={capa}>
        <S.InfoRow marginLeft="auto">
          {destacado && <Badge>Destaque da semana</Badge>}
          <Badge>{tipo}</Badge>
        </S.InfoRow>
      </S.Header>
      <S.Body>
        <S.InfoRow>
          <S.Title>{titulo}</S.Title>
          <S.InfoRow marginLeft="auto">
            <S.Rating>{avaliacao}</S.Rating>
            <S.RatingIcon />
          </S.InfoRow>
        </S.InfoRow>
        <S.Description>{descricao}</S.Description>
        <S.Button to={`/menu/${id}`}>Saiba mais</S.Button>
      </S.Body>
    </S.Card>
  )
}

export default Restaurant
