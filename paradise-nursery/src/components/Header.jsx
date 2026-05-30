import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Leaf, Home, Store } from 'lucide-react'

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const location = useLocation()

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Leaf size={28} color="#2d6a4f" />
          <span>Paradise Nursery</span>
        </div>
        
        <nav className="nav-links">
          {location.pathname !== '/' && (
            <Link to="/" className="nav-link">
              <Home size={18} />
              Home
            </Link>
          )}
          {location.pathname !== '/products' && (
            <Link to="/products" className="nav-link">
              <Store size={18} />
              Plants
            </Link>
          )}
          {location.pathname !== '/cart' && (
            <Link to="/cart" className="nav-link cart-link">
              <ShoppingCart size={20} />
              Cart
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </Link>
          )}
          {location.pathname === '/cart' && (
            <Link to="/cart" className="nav-link cart-link">
              <ShoppingCart size={20} />
              Cart
              {totalQuantity > 0 && (
                <span className="cart-badge">{totalQuantity}</span>
              )}
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Header