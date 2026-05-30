import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ProductList from './pages/ProductList'
import CartPage from './pages/CartPage'
import './App.css'

function App() {
  return (
    <Router basename="/paradise-nursery"> {/* Replace with your repo name */}
      <div className="app">
        <Routes>
          <Route path="/" element={
            <>
              <LandingPage />
            </>
          } />
          <Route path="/products" element={
            <>
              <Header />
              <ProductList />
            </>
          } />
          <Route path="/cart" element={
            <>
              <Header />
              <CartPage />
            </>
          } />
        </Routes>
      </div>
    </Router>
  )
}

export default App