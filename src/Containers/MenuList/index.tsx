import { List } from './styles'
import { Container } from '../../styles/GlobalStyle'
import Product from '../../components/Product'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import Modal from '../../components/Modal'
import Produto from '../../models/Produto'
import { useState } from 'react'
import CartBar from '../CartBar'

const MenuList = () => {
  const { cardapio: produtos } = useSelector((state: RootReducer) => state.Menu)
  const [modalProduct, setModalProduct] = useState<Produto | null>(null)
  const [isModalVisible, setModalVisible] = useState<boolean>(false)

  const handleProductClick = (product: Produto) => {
    setModalProduct(product)
    setModalVisible(true)
  }

  return (
    <Container>
      <Modal
        product={modalProduct}
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
      <CartBar />
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
