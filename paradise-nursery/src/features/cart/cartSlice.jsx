import { createSlice } from '@reduxjs/toolkit'

const loadCartFromStorage = () => {
  const savedCart = localStorage.getItem('paradiseCart')
  return savedCart ? JSON.parse(savedCart) : { items: [], totalQuantity: 0, totalAmount: 0 }
}

const saveCartToStorage = (state) => {
  localStorage.setItem('paradiseCart', JSON.stringify({
    items: state.items,
    totalQuantity: state.totalQuantity,
    totalAmount: state.totalAmount,
  }))
}

const initialState = loadCartFromStorage()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      
      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice += newItem.price
      } else {
        state.items.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        })
      }
      
      state.totalQuantity += 1
      state.totalAmount += newItem.price
      saveCartToStorage(state)
    },
    
    removeItem: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity
        state.totalAmount -= existingItem.totalPrice
        state.items = state.items.filter(item => item.id !== id)
        saveCartToStorage(state)
      }
    },
    
    increaseQuantity: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      
      if (existingItem) {
        existingItem.quantity += 1
        existingItem.totalPrice += existingItem.price
        state.totalQuantity += 1
        state.totalAmount += existingItem.price
        saveCartToStorage(state)
      }
    },
    
    decreaseQuantity: (state, action) => {
      const id = action.payload
      const existingItem = state.items.find(item => item.id === id)
      
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
        existingItem.totalPrice -= existingItem.price
        state.totalQuantity -= 1
        state.totalAmount -= existingItem.price
        saveCartToStorage(state)
      } else if (existingItem && existingItem.quantity === 1) {
        state.totalQuantity -= 1
        state.totalAmount -= existingItem.price
        state.items = state.items.filter(item => item.id !== id)
        saveCartToStorage(state)
      }
    },
    
    clearCart: (state) => {
      state.items = []
      state.totalQuantity = 0
      state.totalAmount = 0
      saveCartToStorage(state)
    },
  },
})

export const { addItem, removeItem, increaseQuantity, decreaseQuantity, clearCart } = cartSlice.actions
export default cartSlice.reducer
