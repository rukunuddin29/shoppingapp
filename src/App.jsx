import React from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'

function App() {
  return (
    <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/home" element={<Home />} />
       <Route path="/cart" element={<Cart />} />
       <Route path="/product/:id" element={<ProductDetails/>} />

    </Routes>
  )
}

export default App