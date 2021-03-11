import React from 'react'
import { render, screen } from '../../../utils/test-utils'

import About from './About'

beforeEach(() => {
  jest.resetAllMocks()
})

test('it should render About Page', () => {
  render(<About />)
  expect(screen.getByText('Projeto Teste')).toBeInTheDocument()
})
