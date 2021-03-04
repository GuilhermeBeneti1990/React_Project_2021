import React from 'react'
import { render } from '@testing-library/react'
import App from './App'

test('it should render react button', () => {
  const { getByText } = render(<App />)
  const btnElement = getByText(/botão/i)
  expect(btnElement).toBeInTheDocument()
})
