import { configureStore } from '@reduxjs/toolkit'
import api from '../services/api'
import menuReducer from './reducers/menu'
import cartReducer from './reducers/cart'

const store = configureStore({
  reducer: {
    Menu: menuReducer,
    Cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
