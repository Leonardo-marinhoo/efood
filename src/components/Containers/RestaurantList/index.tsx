import Restaurante from '../../../models/Restaurante'
import { Container } from '../../../styles/GlobalStyle'
import Restaurant from '../../Restaurant'
import { List } from './styles'
import { useEffect, useState } from 'react'

const RestaurantList = () => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes`)
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [restaurants])

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
