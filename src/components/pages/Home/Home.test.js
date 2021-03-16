import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import Home from '.'

test('it should render home page', () => {
  render(<Home />)
  const btnElement = screen.getByText(/assinar/i)
  expect(btnElement).toBeInTheDocument()
})
