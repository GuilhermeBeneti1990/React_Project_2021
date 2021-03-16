import React from 'react'
import { render } from 'utils/test-utils'

import Heading from '.'

test('match snapshot', () => {
  const { asFragment } = render(<Heading>Title</Heading>)

  expect(asFragment()).toMatchSnapshot()
})
