import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Restaurante from '../../models/Restaurante'

type menuState = Partial<Restaurante>

const initialState: menuState = {}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    updateMenu: (state, action: PayloadAction<Restaurante>) => {
      if (action.payload) {
        Object.assign(state, action.payload)
        console.log(state)
      }
    }
  }
})

export const { updateMenu } = menuSlice.actions
export default menuSlice.reducer
