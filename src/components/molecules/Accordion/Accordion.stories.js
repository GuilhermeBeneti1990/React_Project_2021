import React from 'react'
import Accordion from './Accordion'
import AccordionGroup from 'components/molecules/Accordion/AccordionGroup/AccordionGroup'

export default {
  title: 'Molecules/Accordion',
  component: Accordion
}

export const usage = () => (
  <>
    <Accordion title="Accordion 01">Accordion 01 01 01 01 01</Accordion>
    <Accordion title="Accordion 02">Accordion 02 02 02 02 02</Accordion>
    <Accordion title="Accordion 03">Accordion 03 03 03 03 03</Accordion>
  </>
)

export const withGroup = () => (
  <AccordionGroup>
    <Accordion title="Accordion 01">Accordion 01 01 01 01 01</Accordion>
    <Accordion title="Accordion 02">Accordion 02 02 02 02 02</Accordion>
    <Accordion title="Accordion 03">Accordion 03 03 03 03 03</Accordion>
  </AccordionGroup>
)
