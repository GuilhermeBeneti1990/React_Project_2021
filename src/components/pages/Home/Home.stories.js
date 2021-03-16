import React from 'react'
import Home from '.'

import { buildProducts } from 'models/builders/products'

export default {
  title: 'Components/Pages/Home',
  component: Home
}

const products = buildProducts(8)

export const usage = () => <Home products={products} />
