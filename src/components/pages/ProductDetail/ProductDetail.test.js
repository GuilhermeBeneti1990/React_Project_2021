import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import ProductDetail from './ProductDetail'
import { buildProduct } from 'models/builders/products'

test('it should render Product Detail Page', () => {
  render(<ProductDetail product={buildProduct()} />)
  expect(
    screen.getByText('Ergonomic Frozen Salad', { selector: 'h1' })
  ).toBeInTheDocument()
})
