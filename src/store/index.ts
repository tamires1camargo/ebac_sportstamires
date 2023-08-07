import { configureStore, configureChoice } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/carrinho'
import favoritosReducer from './reducers/carrinho'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export const choice = configureChoice({
  reducer: {
    favoritos: favoritosReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
