import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ProductList from './pages/ProductList'
import CartPage from './pages/CartPage'
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="landing-page">
      <div className="content">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful and
          healthy houseplants. We provide a wide selection of indoor plants
          that bring freshness, beauty, and improved air quality to homes
          and offices. Our mission is to help plant lovers create greener,
          healthier living spaces with easy-to-care-for plants.
        </p>

        <button
          className="get-started-btn"
          onClick={() => (window.location.href = "/plants")}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
```
