import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import Home from './Home'

test('it should render home page', () => {
  render(<Home />)
  const btnElement = screen.getByText(/contratar/i)
  expect(btnElement).toBeInTheDocument()
})
