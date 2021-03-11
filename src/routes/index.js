import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from 'routes/home'
import About from 'routes/about'
import ProductDetail from 'routes/product'

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/product/:slang" element={<ProductDetail />} />
  </Routes>
)

export default AppRoutes
