import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Produto from '../../models/Produto'

type carrinhoState = {
  items: Produto[]
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

      state.items.push(produto)
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload
      state.items = state.items.filter((p) => p.id !== id)
    },
    setCartVisibility: (state, action: PayloadAction<boolean>) => {
      state.isVisible = action.payload
    }
  }
})

export const { addToCart, removeFromCart, setCartVisibility } =
  cartSlice.actions
export default cartSlice.reducer
