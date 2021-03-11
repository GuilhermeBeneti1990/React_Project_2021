import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import ProductDetail from './ProductDetail'

test('it should render Product Detail Page', () => {
  render(<ProductDetail />)
  expect(screen.getByText('Descrição do produto')).toBeInTheDocument()
})
