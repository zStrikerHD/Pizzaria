import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ItemCardapio } from '../../pages/Home'

type CartState = {
  items: ItemCardapio[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ItemCardapio>) => {
      const itemCardaoio = state.items.find(
        (item) => item.id === action.payload.id
      )

      if (!itemCardaoio) {
        state.items.push(action.payload)
      } else alert('O item ja esta adicionado')
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    clear: (state) => {
      state.items = []
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, clear, close, open, remove } = cartSlice.actions
export default cartSlice.reducer
