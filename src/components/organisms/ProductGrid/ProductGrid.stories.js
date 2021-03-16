import React from 'react'
import ProductGrid from '.'

import { buildProducts } from 'models/builders/products'

export default {
  title: 'Components/Organisms/ProductGrid',
  component: ProductGrid
}

export const usage = () => <ProductGrid products={buildProducts(6)} />
