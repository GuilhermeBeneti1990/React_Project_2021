import React from 'react'
import { render } from 'utils/test-utils'

import Hero from '.'

test('renders Hero with children', () => {
  const { getByText } = render(
    <Hero>
      <p>Guilherme Beneti</p>
    </Hero>
  )

  expect(getByText('Guilherme Beneti')).toBeInTheDocument()
})

test('renders image background', () => {
  const image = 'http://test/image.jpg'
  const { getByTestId } = render(<Hero image={image} />)

  expect(getByTestId('hero')).toHaveStyleRule({
    backgroundImage: image
  })
})
