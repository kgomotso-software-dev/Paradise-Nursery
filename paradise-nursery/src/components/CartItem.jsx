import React from 'react'
import { useDispatch } from 'react-redux'
import { increaseQuantity, decreaseQuantity, removeItem } from '../features/cart/cartSlice'
import { Plus, Minus, Trash2 } from 'lucide-react'

const CartItem = ({ item }) => {
  const dispatch = useDispatch()
  
  return (
    <div className="cart-item">
      <div className="cart-item-image">
        <img src={item.image} alt={item.name} />
      </div>
      
      <div className="cart-item-details">
        <h3 className="cart-item-name">{item.name}</h3>
        <p className="cart-item-price">Unit Price: ${item.price.toFixed(2)}</p>
        <p className="cart-item-total">Item Total: ${item.totalPrice.toFixed(2)}</p>
      </div>
      
      <div className="cart-item-quantity">
        <button 
          onClick={() => dispatch(decreaseQuantity(item.id))}
          className="qty-btn"
          aria-label="Decrease quantity"
        >
          <Minus size={16} />
        </button>
        <span className="qty-value">{item.quantity}</span>
        <button 
          onClick={() => dispatch(increaseQuantity(item.id))}
          className="qty-btn"
          aria-label="Increase quantity"
        >
          <Plus size={16} />
        </button>
      </div>
      
      <button 
        onClick={() => dispatch(removeItem(item.id))}
        className="delete-btn"
        aria-label="Remove item"
      >
        <Trash2 size={18} />
        Delete
      </button>
    </div>
  )
}

export default CartItem