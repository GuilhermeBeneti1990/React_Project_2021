import React from 'react'
import { render, fireEvent } from 'utils/test-utils'

import Button from '.'
import { buttonColors, buttonsVariants } from './Button.styles'

test('it should render a text', () => {
  const { getByText } = render(<Button>Test</Button>)
  expect(getByText('Test')).toBeInTheDocument()
})

test('trigger event on click', () => {
  const handleClick = jest.fn()

  const { getByRole } = render(<Button onClick={handleClick} />)

  fireEvent.click(getByRole('button'))

  expect(handleClick).toBeCalled()
})

test.each(Object.values(buttonColors).map((item) => [item]))(
  'it should render with color %s',
  (color) => {
    const { asFragment } = render(<Button color={color} />)

    expect(asFragment()).toMatchSnapshot()
  }
)

test.each(Object.values(buttonsVariants).map((item) => [item]))(
  'it should render with variant %s',
  (variant) => {
    const { asFragment } = render(<Button variant={variant} />)

    expect(asFragment()).toMatchSnapshot()
  }
)

test('it should render with color primary and variant outlined', () => {
  const { asFragment } = render(<Button variant="outlined" color="primary" />)

  expect(asFragment()).toMatchSnapshot()
})

test('it should render with color primary and variant link', () => {
  const { asFragment } = render(<Button variant="link" color="primary" />)

  expect(asFragment()).toMatchSnapshot()
})
