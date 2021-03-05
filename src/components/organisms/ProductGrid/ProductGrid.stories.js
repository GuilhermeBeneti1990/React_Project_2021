import React from 'react'
import ProductGrid from './ProductGrid'

import UnderImage from 'assets/underground.jpg'

export default {
  title: 'Components/Organisms/ProductGrid',
  component: ProductGrid
}

export const usage = () => (
  <ProductGrid
    products={[
      { id: 1, image: UnderImage, title: 'Title', description: 'Text' },
      { id: 2, image: UnderImage, title: 'Title', description: 'Text' },
      { id: 3, image: UnderImage, title: 'Title', description: 'Text' },
      { id: 4, image: UnderImage, title: 'Title', description: 'Text' },
      { id: 5, image: UnderImage, title: 'Title', description: 'Text' },
      { id: 6, image: UnderImage, title: 'Title', description: 'Text' }
    ]}
  />
)
