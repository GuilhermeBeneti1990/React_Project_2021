import React from 'react'
import { fireEvent, render, screen } from '../../../../utils/test-utils'

import AccordionGroup from './AccordionGroup'
import Accordion from '..'

const title = 'Accordion Title'

const renderGroup = (n) => {
  const accordions = []

  for (let i = 0; i < n; i++) {
    accordions.push(
      <Accordion key={i} title={`Title ${i}`}>
        Child {i}
      </Accordion>
    )
  }

  return render(<AccordionGroup>{accordions}</AccordionGroup>)
}

test('it should render with children', () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
    </AccordionGroup>
  )

  expect(screen.getByText(title)).toBeInTheDocument()
})

test('it should render with 3 children', () => {
  render(
    <AccordionGroup>
      <Accordion title={title} />
      <Accordion title={title} />
      <Accordion title={title} />
    </AccordionGroup>
  )

  expect(screen.getAllByText(title)).toHaveLength(3)
})

test('it should render with all accordions closed', () => {
  renderGroup(3)

  expect(screen.queryByText('Child 0')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 1')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument()
})

test('it should opens accordion when is clicked', async () => {
  renderGroup(5)

  await fireEvent.click(screen.getByText('Title 4'))

  expect(screen.queryByText('Child 0')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 1')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 3')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 4')).toBeInTheDocument()
})

test('it should close an accordion when is clicked again', async () => {
  renderGroup(3)

  await fireEvent.click(screen.getByText('Title 1'))

  expect(screen.queryByText('Child 0')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 1')).toBeInTheDocument()
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument()

  await fireEvent.click(screen.getByText('Title 1'))

  expect(screen.queryByText('Child 0')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 1')).not.toBeInTheDocument()
  expect(screen.queryByText('Child 2')).not.toBeInTheDocument()
})
