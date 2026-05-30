import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../features/cart/cartSlice'
import CartItem from '../components/CartItem'
import { ShoppingBag, CreditCard, ShoppingCart } from 'lucide-react'

const CartPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { items, totalQuantity, totalAmount } = useSelector((state) => state.cart)
  
  const handleCheckout = () => {
    alert('Coming Soon! Checkout functionality will be available in the next update.')
  }
  
  if (items.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <ShoppingBag size={64} color="#ccc" />
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any plants to your cart yet.</p>
        <button 
          className="continue-shopping-btn"
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </button>
      </div>
    )
  }
  
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>
          <ShoppingCart size={28} />
          Your Shopping Cart
        </h1>
        <p>{totalQuantity} {totalQuantity === 1 ? 'plant' : 'plants'} in your cart</p>
      </div>
      
      <div className="cart-summary">
        <div className="cart-summary-card">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Total Items:</span>
            <strong>{totalQuantity}</strong>
          </div>
          <div className="summary-row total">
            <span>Total Amount:</span>
            <strong>${totalAmount.toFixed(2)}</strong>
          </div>
        </div>
      </div>
      
      <div className="cart-items-list">
        {items.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      
      <div className="cart-actions">
        <button 
          className="continue-shopping-btn"
          onClick={() => navigate('/products')}
        >
          ← Continue Shopping
        </button>
        <button 
          className="checkout-btn"
          onClick={handleCheckout}
        >
          <CreditCard size={18} />
          Proceed to Checkout
        </button>
      </div>
    </div>
  )
}

export default CartPage