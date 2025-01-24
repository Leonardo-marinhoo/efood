import { List } from './styles'
import { Container } from '../../../styles/GlobalStyle'
import Product from '../../Product'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../../store'
import Modal from '../../Modal'
import Produto from '../../../models/Produto'
import { useState } from 'react'

const MenuList = () => {
  const { cardapio: produtos } = useSelector((state: RootReducer) => state.Menu)
  const [modalProduct, setModalProduct] = useState<Produto | null>(null)

  const handleProductClick = (product: Produto) => {
    setModalProduct(product)
  }

  return (
    <Container>
      <Modal product={modalProduct} />
      <List>
        {produtos?.map((product, index) => (
          <li key={index}>
            <Product
              product={product}
              onclick={() => handleProductClick(product)}
            />
          </li>
        ))}
      </List>
    </Container>
  )
}

export default MenuList
