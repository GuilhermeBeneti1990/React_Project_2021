import React from 'react'
import Card, { CardBody, CardMedia } from './Card'

import Section from 'components/atoms/Section/Section'
import Heading from 'components/atoms/Heading/Heading'
import Button from 'components/atoms/Button/Button'

import UnderImage from 'assets/underground.jpg'

export default {
  title: ' Components/Molecules/Card',
  component: Card,
  subcomponents: { CardBody, CardMedia }
}

export const usage = () => (
  <Section inverse>
    <Card>
      <CardBody>
        <Heading>
          <h6>Card Title</h6>
        </Heading>
        <p>Card description test test test test test test test test test</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais...
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
)

export const withMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={UnderImage} />
      <CardBody>
        <Heading>
          <h6>Card Title</h6>
        </Heading>
        <p>Card description test test test test test test test test test</p>
        <div>
          <Button color="primary" variant="link">
            Saiba mais...
          </Button>
        </div>
      </CardBody>
    </Card>
  </Section>
)
