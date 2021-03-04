import React from 'react'
import { fireEvent, render, screen } from 'utils/test-utils'

import Accordion from './Accordion'

const title = 'Title'
const text = 'Children text'

test('it should render the title', () => {
  render(<Accordion title={title}></Accordion>)
  expect(screen.getByText(title)).toBeInTheDocument()
})

test('it should render without children', () => {
  render(<Accordion>{text}</Accordion>)
  expect(screen.queryByText(text)).not.toBeInTheDocument()
})

test('it should trigger onChange when is clicked', async () => {
  const handleChange = jest.fn()

  render(<Accordion title={title} onChange={handleChange}></Accordion>)

  await fireEvent.click(screen.getByText(title))
  expect(handleChange).toBeCalledTimes(1)
})

describe('when is controlled', () => {
  describe('when starts opened', () => {
    test('it should render the children', () => {
      render(<Accordion open>{text}</Accordion>)
      expect(screen.queryByText(text)).toBeInTheDocument()
    })

    test('it should triggers onChange when it is clicked', async () => {
      const handleChange = jest.fn()
      render(<Accordion title={title} open onChange={handleChange} />)

      await fireEvent.click(screen.getByText(title))

      expect(screen.queryByText(text)).not.toBeInTheDocument()
    })

    test('it should hide the children when open property changes to false', () => {
      const { rerender } = render(
        <Accordion title={title} open>
          {text}
        </Accordion>
      )

      rerender(
        <Accordion title={title} open={false}>
          {text}
        </Accordion>
      )
      expect(screen.queryByText(text)).not.toBeInTheDocument()
    })

    test('it should call default function when it is clicked', async () => {
      render(<Accordion title={title} open />)

      await fireEvent.click(screen.getByText(title))
    })
  })

  describe('when starts closed', () => {
    test('it should render without children', () => {
      render(<Accordion open={false}>{text}</Accordion>)
      expect(screen.queryByText(text)).not.toBeInTheDocument()
    })
  })
})
