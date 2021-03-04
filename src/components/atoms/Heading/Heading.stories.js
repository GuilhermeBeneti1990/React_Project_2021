import { text } from '@storybook/addon-knobs'
import React from 'react'

import Heading from './Heading'

export default {
  title: 'Atoms/Heading',
  component: Heading
}

export const usage = () => (
  <>
    <Heading>
      <h1>{text('', 'Title 01')}</h1>
    </Heading>
    <Heading>
      <h2>{text('', 'Title 02')}</h2>
    </Heading>
    <Heading>
      <h3>{text('', 'Title 03')}</h3>
    </Heading>
    <Heading>
      <h4>{text('', 'Title 04')}</h4>
    </Heading>
    <Heading>
      <h5>{text('', 'Title 05}')}</h5>
    </Heading>
    <Heading>
      <h6>{text('', 'Title 06')}</h6>
    </Heading>
  </>
)
