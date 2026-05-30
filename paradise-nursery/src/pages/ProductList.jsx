import React from 'react'
import { plantsData } from '../data/plantsData'
import PlantCard from '../components/PlantCard'

const ProductList = () => {
  return (
    <div className="product-list-page">
      <div className="page-header">
        <h1>Our Plants Collection</h1>
        <p>Choose from our carefully curated selection of houseplants</p>
      </div>
      
      {plantsData.categories.map((category) => (
        <div key={category.id} className="category-section">
          <h2 className="category-title">{category.name}</h2>
          <div className="plants-grid">
            {category.plants.map((plant) => (
              <PlantCard key={plant.id} plant={plant} />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductList