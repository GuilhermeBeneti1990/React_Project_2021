import React from 'react'
import ProductDetail from '.'

import { buildProduct } from 'models/builders/products'

export default {
  title: 'Components/Pages/ProductDetail',
  component: ProductDetail
}

export const usage = () => <ProductDetail product={buildProduct()} />
