import React from 'react'
import { render, screen } from 'utils/test-utils'

import ProductDetailRoute from './index'
import { useProduct } from 'hooks/products'
import { buildProduct } from 'models/builders/products'

jest.mock('hooks/products')

test('it should render a project', () => {
  useProduct.mockReturnValue(buildProduct())

  render(<ProductDetailRoute />)

  expect(
    screen.getByText('Ergonomic Frozen Salad', { selector: 'h1' })
  ).toBeInTheDocument()
})

test('it should error when not found product', () => {
  useProduct.mockReturnValue(null)

  render(<ProductDetailRoute />)

  expect(
    screen.getByText('Serviço não encontrado', { selector: 'h1' })
  ).toBeInTheDocument()
})
