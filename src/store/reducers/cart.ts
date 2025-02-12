import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Produto from '../../models/Produto'

type CartProduct = Produto & {
  cart_id: number
}

type carrinhoState = {
  items: CartProduct[]
  isVisible?: boolean
}

const initialState: carrinhoState = {
  items: [],
  isVisible: false
}

const cartSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Produto>) => {
      const produto = action.payload
      const last_product = state.items[state.items.length - 1]
      const cart_id = last_product ? last_product.cart_id + 1 : 1
      state.items.push({
        cart_id,
        ...produto
      })
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const cart_id = action.payload
      state.items = state.items.filter((p) => p.cart_id !== cart_id)
    },
    setCartVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    }
  }
})

export const { addToCart, removeFromCart, setCartVisibility } =
  cartSlice.actions
export default cartSlice.reducer
