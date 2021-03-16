import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Grid from 'components/atoms/Grid'
import Heading from 'components/atoms/Heading'

import { ErrorContent, ImageContainer } from './Error.styles'
import Section from 'components/atoms/Section'
import Button from 'components/atoms/Button'

const Error = ({ image, title, description }) => (
  <Section>
    <Grid sm={2}>
      <ErrorContent>
        <Heading>
          <h1>{title}</h1>
        </Heading>
        <p>{description}</p>
        <Button as={Link} to="/" color="primary">
          Ir para página inicial
        </Button>
      </ErrorContent>
      <div>
        <ImageContainer>{image}</ImageContainer>
      </div>
    </Grid>
  </Section>
)

Error.defaultProps = {
  image: undefined,
  title: '',
  description: ''
}

Error.propTypes = {
  image: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string
}

export default Error
