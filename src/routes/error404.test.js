import React from 'react'
import { getByText, render, screen } from 'utils/test-utils'

import Error404 from './error404'

test('it should render error page', () => {
  render(<Error404 />)
  expect(screen.getByText('Página não encontrada')).toBeInTheDocument()
})
