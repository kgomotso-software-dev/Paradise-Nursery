import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Leaf, Sparkles, Truck, Shield } from 'lucide-react'

const LandingPage = () => {
  const navigate = useNavigate()
  
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <div className="company-icon">
              <Leaf size={64} color="#2d6a4f" />
            </div>
            <h1 className="company-name">Paradise Nursery</h1>
            <p className="company-tagline">Bring Nature Into Your Home</p>
            <button 
              className="get-started-btn"
              onClick={() => navigate('/products')}
            >
              Get Started
              <Sparkles size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="about-section">
        <h2>About Paradise Nursery</h2>
        <p>
          Founded in 2020, Paradise Nursery has been dedicated to bringing the 
          beauty and tranquility of nature into homes across the country. 
          We believe that everyone deserves to experience the joy of caring for 
          houseplants, which is why we carefully select only the healthiest, 
          most resilient plants for our collection.
        </p>
        <p>
          Whether you're a seasoned plant parent or just starting your green journey, 
          our team of horticulture experts is here to help you find the perfect 
          plants for your space and lifestyle. Every plant from Paradise Nursery 
          comes with detailed care instructions and our 30-day health guarantee.
        </p>
        
        <div className="features">
          <div className="feature">
            <Truck size={32} color="#2d6a4f" />
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
          </div>
          <div className="feature">
            <Shield size={32} color="#2d6a4f" />
            <h3>30-Day Guarantee</h3>
            <p>Healthy plants or refund</p>
          </div>
          <div className="feature">
            <Sparkles size={32} color="#2d6a4f" />
            <h3>Expert Support</h3>
            <p>Plant care assistance</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage