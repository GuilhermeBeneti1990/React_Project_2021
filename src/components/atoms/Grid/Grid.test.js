import React from 'react'
import { render } from 'utils/test-utils'

import Grid from './Grid'

test('it should match snapshot without params', () => {
  const { asFragment } = render(<Grid></Grid>)

  expect(asFragment()).toMatchSnapshot()
})

test('it should match snapshot with params', () => {
  const { asFragment } = render(<Grid sm={2} md={3} lg={4} xl={5}></Grid>)

  expect(asFragment()).toMatchSnapshot()
})
