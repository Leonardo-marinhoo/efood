import { List } from './styles'
import { useEffect, useState } from 'react'
import { Container } from '../../styles/GlobalStyle'
import Product from '../Product'
import { useParams } from 'react-router-dom'
import Produto from '../../models/Produto'

const MenuList = () => {
  const [products, setproducts] = useState<Produto[]>()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setproducts(res.cardapio))
  }, [id])

  return (
    <Container>
      <List>
        {products?.map((product, index) => (
          <li key={index}>
            <Product
              nome={product.nome}
              foto={product.foto}
              preco={product.preco}
              descricao={product.descricao}
              porcao={product.porcao}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default MenuList
