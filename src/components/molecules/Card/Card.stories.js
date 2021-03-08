import React from 'react'
import Card, { CardBody, CardMedia, CardMediaDescription } from './Card'

import Section from 'components/atoms/Section/Section'
import Heading from 'components/atoms/Heading/Heading'
import Button from 'components/atoms/Button/Button'

import Food from 'assets/food_01.jpg'

export default {
  title: ' Components/Molecules/Card',
  component: Card,
  subcomponents: { CardBody, CardMedia, CardMediaDescription }
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
      <CardMedia image={Food} />
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

export const onlyMedia = () => (
  <Section inverse>
    <Card>
      <CardMedia image={Food}>
        <CardMediaDescription>
          <h5>Descrição da imagem</h5>
        </CardMediaDescription>
      </CardMedia>
    </Card>
  </Section>
)
