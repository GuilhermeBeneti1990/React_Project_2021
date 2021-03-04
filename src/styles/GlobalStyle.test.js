import React from 'react'
import { render } from '../utils/test-utils'

import GlobalStyle from './GlobalStyle'

test('match snapshot', () => {
  render(<GlobalStyle />)

  expect(document.head).toMatchSnapshot()
})
