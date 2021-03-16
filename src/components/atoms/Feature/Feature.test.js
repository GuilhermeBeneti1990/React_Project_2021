import React from 'react'
import { render } from 'utils/test-utils'

import Feature from '.'

test('it should render a title', () => {
  const { getByText } = render(<Feature title="My Title"></Feature>)

  expect(getByText('My Title')).toBeInTheDocument()
})

test('it should render a content for component', () => {
  const { getByText } = render(<Feature>My Content</Feature>)

  expect(getByText('My Content')).toBeInTheDocument()
})
