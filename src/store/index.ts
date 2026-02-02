import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reduces/cart'
import checkoutReducer from './reduces/checkout'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    checkout: checkoutReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
