import { Container } from '../../styles/GlobalStyle'
import Restaurant from '../../components/Restaurant'
import { List } from './styles'
import { useListRestaurantsQuery } from '../../services/api'

const RestaurantList = () => {
  const { data: restaurants } = useListRestaurantsQuery()

  return (
    <Container>
      <List>
        {restaurants?.map((restaurant, index) => (
          <li key={index}>
            <Restaurant
              id={restaurant.id}
              titulo={restaurant.titulo}
              destacado={restaurant.destacado}
              tipo={restaurant.tipo}
              avaliacao={restaurant.avaliacao}
              descricao={restaurant.descricao}
              capa={restaurant.capa}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default RestaurantList
