import React from 'react'
import { text } from '@storybook/addon-knobs'

import Hero from '.'
import Image from '../../../assets/cover.jpg'
import Heading from '../../atoms/Heading'
import Button from '../../atoms/Button'

export default {
  title: 'Components/Molecules/Hero',
  component: Hero
}

export const usage = () => (
  <Hero image={Image}>
    <h1>{text('Title', 'Title Title')}</h1>
    <p>{text('Text', 'Paragraph title test')}</p>
  </Hero>
)

export const withList = () => (
  <Hero image={Image}>
    <Heading>
      <h1>Title</h1>
    </Heading>
    <ul>
      <li>Item 01</li>
      <li>Item 02</li>
      <li>Item 03</li>
    </ul>
    <Button color="primary" variant="outlined">
      Botão
    </Button>
  </Hero>
)
