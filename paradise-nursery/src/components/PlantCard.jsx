import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const PlantCard = ({ plant }) => {
  const dispatch = useDispatch()
  const [isAdded, setIsAdded] = useState(false)
  const cartItems = useSelector((state) => state.cart.items)
  
  // Check if already in cart
  const isInCart = cartItems.some(item => item.id === plant.id)
  
  const handleAddToCart = () => {
    dispatch(addItem({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image,
    }))
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 1500)
  }
  
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <div className="plant-info">
        <h3 className="plant-name">{plant.name}</h3>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-price">${plant.price.toFixed(2)}</p>
        <button 
          onClick={handleAddToCart}
          disabled={isAdded || isInCart}
          className={`add-button ${(isAdded || isInCart) ? 'added' : ''}`}
        >
          {isAdded ? '✓ Added!' : isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  )
}

export default PlantCard