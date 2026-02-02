import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCardapio } from '../../pages/Home'

type CartState = {
  items: ItemCardapio[]
  isOpen: boolean
  error: string | null // Adicionando um campo de erro para feedback
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  error: null // Inicializando o erro como null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemCardapio>) => {
      const itemCardapio = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemCardapio) {
        state.items.push(action.payload)
        state.error = null // Reseta o erro caso o item seja adicionado com sucesso
      } else {
        state.error = 'O item já está adicionado' // Armazena o erro no estado
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      state.error = null
    },
    clear: (state) => {
      state.items = []
      state.error = null
    },
    open: (state) => {
      state.isOpen = true
      state.error = null
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, clear, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
