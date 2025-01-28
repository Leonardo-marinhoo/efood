import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Restaurante from '../../models/Restaurante'

type menuState = Partial<Restaurante>

const initialState: menuState = {}

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    updateMenu: (_state, action: PayloadAction<Restaurante>) => {
      if (action.payload) {
        return action.payload
      }
    }
  }
})

export const { updateMenu } = menuSlice.actions
export default menuSlice.reducer
