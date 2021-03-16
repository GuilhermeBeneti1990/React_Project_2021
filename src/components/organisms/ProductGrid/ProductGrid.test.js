import React from 'react'
import { fireEvent, render, screen } from 'utils/test-utils'

import ProductGrid from '.'

const buildProducts = (size) => {
  const result = []

  for (let i = 0; i < size; i++) {
    result.push({ id: i, title: `Title ${i}` })
  }

  return result
}

describe.each([
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 3],
  [6, 3]
])('it should renders only %i products', (size, showOnly) => {
  test(`in a total of ${showOnly}`, () => {
    render(<ProductGrid products={buildProducts(size)} />)

    expect(screen.getAllByRole('heading').length).toBe(showOnly)
  })

  test('it should render all products when the button is clicked', async () => {
    render(<ProductGrid products={buildProducts(size)} />)

    await fireEvent.click(screen.getByText('Complete List'))
    expect(screen.getAllByRole('heading').length).toBe(size)
  })
})
