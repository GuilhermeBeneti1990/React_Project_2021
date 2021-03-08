import React from 'react'
import ProductGrid from './ProductGrid'

import Food from 'assets/food_01.jpg'

export default {
  title: 'Components/Organisms/ProductGrid',
  component: ProductGrid
}

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: Food, title: 'Title', description: 'Text' },
      { id: 2, image: Food, title: 'Title', description: 'Text' },
      { id: 3, image: Food, title: 'Title', description: 'Text' },
      { id: 4, image: Food, title: 'Title', description: 'Text' },
      { id: 5, image: Food, title: 'Title', description: 'Text' },
      { id: 6, image: Food, title: 'Title', description: 'Text' }
    ]}
  />
)
